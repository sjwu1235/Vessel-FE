import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WalletCreatorFormComponent } from './wallet-creator-form.component';

describe('WalletCreatorFormComponent', () => {
  let component: WalletCreatorFormComponent;
  let fixture: ComponentFixture<WalletCreatorFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WalletCreatorFormComponent]
    });
    fixture = TestBed.createComponent(WalletCreatorFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
