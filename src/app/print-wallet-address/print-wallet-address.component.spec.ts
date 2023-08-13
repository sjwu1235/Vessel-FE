import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintWalletAddressComponent } from './print-wallet-address.component';

describe('PrintWalletAddressComponent', () => {
  let component: PrintWalletAddressComponent;
  let fixture: ComponentFixture<PrintWalletAddressComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PrintWalletAddressComponent]
    });
    fixture = TestBed.createComponent(PrintWalletAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
