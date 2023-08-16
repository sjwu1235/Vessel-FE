import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Clipboard } from '@capacitor/clipboard';
import { SessionQuery } from 'src/app/state/session.query';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-print-wallet-address',
  templateUrl: './print-wallet-address.component.html',
  styleUrls: ['./print-wallet-address.component.css']
})

export class PrintWalletAddressComponent implements OnInit {

  @ViewChild('printSection', { static: false, read: ElementRef })
  printSection: ElementRef | undefined;

  public Clipboard = Clipboard;

  constructor(
    public sessionQuery: SessionQuery,
    private toastr: ToastrService

  ) { }

  ngOnInit() { }

  async copyAddress(address: string) {
    await this.Clipboard.write({
      string: address,
    })
      .then(() => {
        this.toastr.success('Address copied!');
      })
      .catch(() => {
        this.toastr.error('Something weird happened, please try again!');
      });
  }

}
