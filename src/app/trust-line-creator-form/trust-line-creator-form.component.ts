import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { SessionXrplService } from 'src/app/state/session-xrpl.service';
import { SetupQuery } from 'src/app/state/setup';
import { environment } from 'src/environments/environment';
import { IssuedCurrencyAmount } from 'xrpl/dist/npm/models/common';

@Component({
  selector: 'app-trust-line-creator-form',
  templateUrl: './trust-line-creator-form.component.html',
  styleUrls: ['./trust-line-creator-form.component.css']
})
export class TrustLineCreatorFormComponent {

}
