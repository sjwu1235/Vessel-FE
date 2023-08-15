import { Injectable } from '@angular/core';
import { EnclaveService } from 'src/app/services/enclave/enclave.service';
import { SearchService } from 'src/app/services/search.service';
import { SessionQuery } from 'src/app/state/session.query';
import { SessionStore } from './session.store';
import { withLoggedExchange } from 'src/app/utils/console.helpers';
import { panic } from 'src/app/utils/errors/panic';
import { never } from 'src/helpers/helpers';
import {
  CreateWallet,
  CreateWalletResult,
  SignTransaction,
  SignTransactionResult,
  TransactionSigned,
  TransactionToSign,
  GetXrplWallet,
  GetXrplWalletResult
} from 'src/schema/actions';
import { XrplPublicKeyHex } from '../../schema/types';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor(
    private sessionStore: SessionStore,
    private enclaveService: EnclaveService,
    private sessionQuery: SessionQuery,

    //private searchService: SearchService,
  ) { }

   /**
   * Create a new wallet.
   *
   * @see EnclaveService#createWallet
   */
   async createWallet(
    name: string,
    pin: string,
    auth_map: Map<string, string>,
    phone_number?: string
  ): Promise<string> {
    try {
      const request: CreateWallet = {
        owner_name: name,
        auth_pin: pin,
        phone_number,
        auth_map: Object.fromEntries(auth_map),
      };
      const result: CreateWalletResult = await this.enclaveService.createWallet(
        request
      );
      if ('Created' in result) {
        const wallet = result.Created;
        this.sessionStore.update({ wallet, pin });
        /*try {
          await this.searchService.insertWalletAddress({
            wallet_id: wallet.wallet_id,
            phone_number: wallet.phone_number,
            owner_name: wallet.owner_name,
          });
        } catch (err) {
          console.log(err);
        }*/
        return wallet.wallet_id;
      } else if ('Failed' in result) {
        this.sessionStore.setError(result);
        throw panic('SessionService: createWallet failed', result);
      } else {
        throw never(result);
      }
    } catch (err) {
      this.sessionStore.setError(err);
      return 'error';
    }
  }

   /**
   * Get public key of an existing wallet address.
   *
   * @see EnclaveService#getXrplWallet
   */
   async getXrplWalletPublicKey(walletId: string): Promise<XrplPublicKeyHex> {
    const request: GetXrplWallet = { wallet_id: walletId };
    const result: GetXrplWalletResult = await this.enclaveService.getXrplWallet(
      request
    );

    if ('Opened' in result) {
      return result.Opened.public_key_hex;
    } else if ('Failed' in result) {
      console.error(result);
      throw new Error(result.Failed);
    } else {
      throw never(result);
    }
  }

  /**
   * Sign a transaction using the active session's wallet.
   *
   * This takes care of wrapping {@link SignTransaction}
   * and unwrapping {@link SignTransactionResult}.
   *
   * @see EnclaveService#signTransaction
   */
  async signTransaction(
    transaction_to_sign: TransactionToSign,
    wallet_id?: string,
    account_pin?: string
  ): Promise<TransactionSigned> {
    const { wallet, pin } = this.sessionQuery.assumeActiveSession();
    const active_wallet_id = wallet.wallet_id;

    const wallet_id_tx = wallet_id ? wallet_id : active_wallet_id;

    const pin_tx = account_pin ? account_pin : pin;

    const signRequest: SignTransaction = {
      auth_pin: pin_tx,
      wallet_id: wallet_id_tx,
      transaction_to_sign,
    };

    const signResult: SignTransactionResult = await withLoggedExchange(
      'SessionService: EnclaveService.signTransaction:',
      async () => await this.enclaveService.signTransaction(signRequest),
      signRequest
    );
    if ('Signed' in signResult) {
      return signResult.Signed;
    } else if ('InvalidAuth' in signResult) {
      this.sessionStore.setError({ signResult });
      throw panic('SessionService.signTransaction: invalid auth', signResult);
    } else if ('Failed' in signResult) {
      this.sessionStore.setError({ signResult });
      throw panic(
        `SessionService.signTransaction failed: ${signResult.Failed}`,
        signResult
      );
    } else {
      throw never(signResult);
    }
  }
}
