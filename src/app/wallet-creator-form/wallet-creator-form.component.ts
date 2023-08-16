import { Component, OnInit } from '@angular/core';
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
import { HttpClient } from '@angular/common/http';


interface Country {
  country: string;
  code: string;
  flag: string;
}

/** @title Form field with error messages */
@Component({
  selector: 'app-wallet-creator-form',
  templateUrl: './wallet-creator-form.component.html',
  styleUrls: ['./wallet-creator-form.component.css'],
})
export class WalletCreatorFormComponent implements OnInit {

  registrationForm: FormGroup;
  model = new Details('', '', '', '', '');
  walletid = '';
  countries: Country[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private sessionService: SessionService,
    private router: Router,
    private http: HttpClient,
  ) { this.registrationForm = this.generateFormGroup(); }

  ngOnInit(): void {
    this.fetchCountries();
  }

  fetchCountries(): void {
    this.http.get<Country[]>('assets/countries.json').subscribe(data => {
      this.countries = data.sort((a, b) => a.country.localeCompare(b.country));
    }, error => {
      console.error("There was an error fetching countries data", error);
    });
  }

  selectedCountry: any = {
    country: 'South Africa',
    code: '+27',
    flag: '🇿🇦'
  };

  showDropdown: boolean = false;

  toggleDropdown() {
    this.showDropdown = !this.showDropdown;
  }

  selectCountry(country: Country) {
    this.selectedCountry = country;
    this.showDropdown = false;
  }

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
          Validators.pattern("^[0-9]+$")
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



      const countryCode = this.selectedCountry.code
      // const phoneNumber = this.registrationForm.value.mobile
      const { firstName, lastName, mobile, pin } = this.registrationForm.value;
      let fullPhoneNumber: string = countryCode + mobile.replace(/^0+/, '')

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
          fullPhoneNumber
        );
        console.log(wallet_id);
        this.walletid = wallet_id;
        this.router.navigate(['/display-wallet'])

      } catch (err) {
        console.log(err)
      }

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



