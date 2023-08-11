import {Component} from '@angular/core';
import {FormGroup} from '@angular/forms';
import { Router } from '@angular/router';
import { Details } from '../details';
//import { SessionService } from '../state/session.service';
//import { SessionXrplService } from '../state/session-xrpl.service';
//import { environment } from 'src/environments/environment';
//import { InviteService } from '../services/invite.service';
/** @title Form field with error messages */
@Component({
  selector: 'app-wallet-creator-form',
  templateUrl: './wallet-creator-form.component.html',
  styleUrls: ['./wallet-creator-form.component.css'],
})
export class WalletCreatorFormComponent {
  model = new Details('','','','','');

  submitted = false;
  constructor(
    //private inviteService: InviteService,
    //private sessionService: SessionService,
    private router: Router,
    //private sessionXrplService: SessionXrplService,
  ) {
  }
  async onSubmit() { 
    let invite_id = '';

    this.submitted = true;
    /* I'm assuming some validation occurs here*/

    const firstName = this.model.firstname;
    const lastName = this.model.lastname;
    const pin = this.model.pin;
    const phoneNumber = this.model.number;

    //hardcode answers
    const answers = new Map<string, string>();
    answers.set("hello", "world");  

    try {
      //wallet creation
      /*const wallet_id: string = await this.sessionService.createWallet(
        firstName + ' ' + lastName,
        pin,
        answers,
        phoneNumber
      );
        */
      // Autofund the account on creation, later
      /*const autoFundBool = environment.autofundXrp;
      if (autoFundBool) {
        const result = await withLoadingOverlayOpts(
          this.loadingCtrl,
          { message: 'Creating Wallet' },
          () => this.sessionXrplService.sendAutoFunds(wallet_id)
        ).then(async () => {
          await withLoadingOverlayOpts(
            this.loadingCtrl,
            { message: 'Redeeming invite code' },
            async () => {
              if (environment.enableInvites) {
                await this.inviteService.redeemInvite(invite_id);
              }
            }
          );
        });
      }*/
      this.router.navigate(['/print-wallet']);
    } catch (err) {
      //this is an error notification, need to make component for it, this is is from https://sweetalert2.github.io/
      /*this.notification.swal.fire({
        icon: 'error',
        titleText: 'Wallet Not Created!',
        text: 'There was a problem creating your wallet, please try again.',
        confirmButtonText: 'DONE',
      });*/
      
      this.router.navigate(['/']);
    }
    this.submitted = false;
    
  
    }

  newDetails() {
    this.model = new Details('','','','','');
  }

  //////// NOT SHOWN IN DOCS ////////

  // Reveal in html:
  //   Name via form.controls = {{showFormControls(heroForm)}}
  showFormControls(form: any) {
    return form && form.controls.name &&
    form.controls.name.value; // Dr. IQ
  }

  /////////////////////////////

}



