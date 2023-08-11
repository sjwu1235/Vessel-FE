import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WalletCreatorFormComponent } from './wallet-creator-form/wallet-creator-form.component';

const routes: Routes = [
  { path: '', redirectTo: '/create-wallet', pathMatch: 'full' },
  { path: 'create-wallet', component: WalletCreatorFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
