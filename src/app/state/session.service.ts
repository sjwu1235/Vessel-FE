import { Injectable } from '@angular/core';
import { EnclaveService } from 'src/app/services/enclave/enclave.service';
//import { SearchService } from 'src/app/services/search.service';
import { SessionStore } from './session.store';
import { panic } from 'src/app/utils/errors/panic';
import { never } from 'src/helpers/helpers';
import {
  CreateWallet,
  CreateWalletResult,
} from 'src/schema/actions';
@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor(
    private sessionStore: SessionStore,
    private enclaveService: EnclaveService,
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
}
