import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { FooterComponent } from './footer/footer.component';
import { WalletCreatorFormComponent } from './wallet-creator-form/wallet-creator-form.component';
import { PrintWalletAddressComponent } from './print-wallet-address/print-wallet-address.component';
import { HttpClientModule } from '@angular/common/http';
import { environment } from '../environments/environment';
import { AkitaNgRouterStoreModule } from '@datorama/akita-ng-router-store';
import { AkitaNgDevtools } from '@datorama/akita-ngdevtools';
import { QRCodeModule } from 'angularx-qrcode';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LandingComponent } from './landing/landing.component';
import { TrustLineCreatorFormComponent } from './trust-line-creator-form/trust-line-creator-form.component';
import { LearnMoreComponent } from './learn-more/learn-more.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    FooterComponent,
    WalletCreatorFormComponent,
    PrintWalletAddressComponent,
    LandingComponent,
    TrustLineCreatorFormComponent,
    LearnMoreComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    CommonModule,
    HttpClientModule,
    FormsModule,
    environment.production ? [] : AkitaNgDevtools.forRoot(),
    AkitaNgRouterStoreModule,
    ReactiveFormsModule,
    QRCodeModule,
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-center', preventDuplicates: true
    }),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

