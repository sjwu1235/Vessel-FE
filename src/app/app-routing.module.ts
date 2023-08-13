import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WalletCreatorFormComponent } from './wallet-creator-form/wallet-creator-form.component';
import { PrintWalletAddressComponent } from './print-wallet-address/print-wallet-address.component'

const routes: Routes = [
  { path: '', redirectTo: '/create-wallet', pathMatch: 'full' },
  { path: 'create-wallet', component: WalletCreatorFormComponent },
  { path: '', redirectTo: '/display-wallet', pathMatch: 'full' },
  { path: 'display-wallet', component: PrintWalletAddressComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
