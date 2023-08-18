import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WalletCreatorFormComponent } from './wallet-creator-form/wallet-creator-form.component';
import { PrintWalletAddressComponent } from './print-wallet-address/print-wallet-address.component'
import { TrustLineCreatorFormComponent } from './trust-line-creator-form/trust-line-creator-form.component';
import { LandingComponent } from './landing/landing.component';
import { LearnMoreComponent } from './learn-more/learn-more.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: LandingComponent },
  { path: 'create-wallet', component: WalletCreatorFormComponent },
  { path: 'display-wallet', component: PrintWalletAddressComponent },
  { path: 'opt-in', component: TrustLineCreatorFormComponent },
  { path: 'landing-page', component: LandingComponent },
  { path: 'learn-more', component: LearnMoreComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
