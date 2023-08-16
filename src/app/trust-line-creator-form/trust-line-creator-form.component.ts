import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { SessionXrplService } from 'src/app/state/session-xrpl.service';
import { SetupQuery } from 'src/app/state/setup';
import { IssuedCurrencyAmount } from 'xrpl/dist/npm/models/common';
import { SessionService } from 'src/app/state/session.service';
import { SwalHelper } from '../utils/notification/swal-helper';
import { Router } from '@angular/router';
import * as xrpl from 'xrpl'

@Component({
  selector: 'app-trust-line-creator-form',
  templateUrl: './trust-line-creator-form.component.html',
  styleUrls: ['./trust-line-creator-form.component.css']
})

export class TrustLineCreatorFormComponent {

  address?: string;
  pin?: string;
  clicked = false;

  constructor(
    private notification: SwalHelper,
    private sessionService: SessionService,
    private setupQuery: SetupQuery,
    private sessionXrplService: SessionXrplService,
    private router: Router
  ) { }

  get validatedAddress(): string | undefined {
    const trimmed = this.address?.trim();
    return trimmed === '' ? undefined : trimmed;
  }

  get validAddressType(): AddressType | undefined {
    return this.validatedAddress
      ? addressType(this.validatedAddress)
      : undefined;
  }

  get validatedPin(): string | undefined {
    const trimmed = this.pin?.trim();
    return trimmed === '' ? undefined : trimmed;
  }

  async confirmEntry(): Promise<void> {
    if (
      this.validAddressType !== undefined
    ) {
      this.onEntryConfirmed(this.address, this.pin)
    } else {
      this.notification.swal.fire({
        icon: 'error',
        title: 'Input Error',
        text: 'Please provide a valid address',
      });
      this.reset()
    }
  }

  async onEntryConfirmed(address?: string, pin?: string): Promise<void> {
    if (address && pin) {
      this.clicked = true;
      const openWalletErrorMessage = await this.sessionService.openWallet(address, pin)
      if (openWalletErrorMessage !== undefined) {
        this.notification.swal.fire({
          icon: 'warning',
          title: 'Something Went Wrong.',
          text: openWalletErrorMessage,
        });
        console.log(openWalletErrorMessage)
      } else {
        await this.optin("FOO").then((result) => {
          if (result !== undefined) {
            this.notification.swal.fire({
              icon: 'error',
              title: 'Trustline Error.',
              text: 'Please try again later.',
            });
          }
          else {
            this.notification.swal.fire({
              icon: 'success',
              title: 'Success!',
              text: 'You have opted in',
            });
            this.router.navigate(['/home']);
          }
        })
      }
    }
    this.reset()
  }

  reset() {
    this.clicked = false;
    this.address = '';
    this.pin = '';
  }

  async optin(currency: string) {
    const issuer = this.setupQuery.tokenIssuer;
    const limitAmount: IssuedCurrencyAmount = {
      currency,
      issuer,
      value: '10000',
    };

    await this.sessionXrplService
      .createTrustline(limitAmount, true)
      .then((result) => {
        console.log(result);
        return undefined;
      })
      .catch((err) => {
        console.log(err);
        return err;
      })
  }
}

type AddressType = 'Algorand' | 'XRPL';

const addressTypes = (address: string): AddressType[] => {
  const coerce = (t: AddressType[]) => t;
  return [
    ...coerce(xrpl.isValidAddress(address) ? ['XRPL'] : []),
  ];
};

const addressType = (address: string): AddressType | undefined => {
  const types = addressTypes(address);
  switch (types.length) {
    case 0:
      return undefined;
    case 1:
      return types[0];
    default:
      throw Error(
        `addressType: ${JSON.stringify(
          types
        )} has multiple types: ${JSON.stringify(types)}`
      );
  }
};



