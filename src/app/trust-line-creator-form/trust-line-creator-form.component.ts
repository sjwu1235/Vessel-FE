<<<<<<< HEAD
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { SessionXrplService } from 'src/app/state/session-xrpl.service';
import { SetupQuery } from 'src/app/state/setup';
import { environment } from 'src/environments/environment';
import { IssuedCurrencyAmount } from 'xrpl/dist/npm/models/common';
=======
import { Component } from '@angular/core';
import { SessionService } from 'src/app/state/session.service';
import { SwalHelper } from 'src/app/utils/notification/swal-helper';
>>>>>>> cd374acadb14e27d0ba3038b711bcc1a82f4901d

@Component({
  selector: 'app-trust-line-creator-form',
  templateUrl: './trust-line-creator-form.component.html',
  styleUrls: ['./trust-line-creator-form.component.css']
})

export class TrustLineCreatorFormComponent {

  address?: string;
  pin?: string;

  constructor(
    private notification: SwalHelper,
    private sessionService: SessionService,
  ) { }

  get validatedAddress(): string | undefined {
    const trimmed = this.address?.trim();
    return trimmed === '' ? undefined : trimmed;
  }

  get validatedPin(): string | undefined {
    const trimmed = this.pin?.trim();
    return trimmed === '' ? undefined : trimmed;
  }

  async onPinConfirmed(address?: string, pin?: string): Promise<void> {
    if (address && pin) {

      const openWalletErrorMessage = async () => await this.sessionService.openWallet(address, pin);
      console.log(openWalletErrorMessage)

      if (openWalletErrorMessage !== undefined) {
        this.notification.swal.fire({
          icon: 'warning',
          title: 'Something went wrong',
          text: 'Try again',
        });
      } else {
        this.notification.swal.fire({
          icon: 'success',
          title: 'Success!',
          text: 'You have opted in',
        });
      }
    } else {
      this.notification.swal.fire({
        icon: 'error',
        title: 'Input Error',
        text: 'Please provide a valid address and pin',
      });
    }
  }
}

