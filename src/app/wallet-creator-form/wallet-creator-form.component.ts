import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Details } from '../details';
import { SessionService } from '../state/session.service';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ValidationErrors,
  Validators,
} from '@angular/forms';

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
  registrationForm: FormGroup;
  model = new Details('', '', '', '', '');
  walletid = '';

  constructor(
    //private inviteService: InviteService,
    private formBuilder: FormBuilder,
    private sessionService: SessionService,
    private router: Router,
    //private sessionXrplService: SessionXrplService,
  ) { this.registrationForm = this.generateFormGroup(); }

  get f() {
    return this.registrationForm.controls;
  }

  generateFormGroup(): FormGroup {
    return this.formBuilder.group({
      firstName: [
        '',
        Validators.compose([Validators.minLength(2), Validators.required]),
      ],
      lastName: [
        '',
        Validators.compose([Validators.minLength(2), Validators.required]),
      ],
      mobile: [
        '',
        Validators.compose([
          Validators.required,
          Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")
        ]),
      ],
      pin: [
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(10),
        ]),
      ],
      confirmPin: [
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(10),
          this.matchValues('pin'),
        ]),
      ],
    });
  }

  matchValues(
    matchTo: string
  ): (arg0: AbstractControl) => ValidationErrors | null {
    return (control: AbstractControl): ValidationErrors | null =>
      !!control?.parent?.value &&
        control?.value ===
        (control.parent.controls as { [key: string]: AbstractControl })[matchTo]
          .value
        ? null
        : { mismatch: true };
  }

  clearForm() {
    this.registrationForm.reset();
    this.model = new Details('', '', '', '', '');
  }


  async onSubmit() {

    this.registrationForm.markAllAsTouched();
    if (this.registrationForm.valid) {
      // let invite_id = '';

      // this.submitted = true;
      // console.log(this.submitted)
      /* I'm assuming some validation occurs here*/

      const { firstName, lastName, phoneNumber, pin } = this.registrationForm.value;

      //hardcode answers
      const answers = new Map<string, string>();
      answers.set("hello", "world");
      //this.walletid = "loading wallet id ...";
      try {
        //wallet creation
        const wallet_id: string = await this.sessionService.createWallet(
          firstName + ' ' + lastName,
          pin,
          answers,
          phoneNumber
        );
        console.log(wallet_id);
        this.walletid = wallet_id;
        this.router.navigate(['/display-wallet'])


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
        //this.router.navigate(['/print-wallet']);
      } catch (err) {
        console.log(err)
        //this is an error notification, need to make component for it, this is is from https://sweetalert2.github.io/
        /*this.notification.swal.fire({
          icon: 'error',
          titleText: 'Wallet Not Created!',
          text: 'There was a problem creating your wallet, please try again.',
          confirmButtonText: 'DONE',
        });*/

        //this.router.navigate(['/']);
      }
      //this.submitted = false;

    }
  }

  newDetails() {
    this.model = new Details('', '', '', '', '');
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



