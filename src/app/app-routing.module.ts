import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './cw-about/cw-about.component';
import { ActionComponent } from './cw-action/cw-action.component';
import { CCComponent } from './cw-cc/cw-cc.component';
import { DonateComponent } from './cw-donate/cw-donate.component';
import { IndexComponent } from './cw-index/cw-index.component';

const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'about', component: AboutComponent },
  { path: 'action', component: ActionComponent },
  { path: 'impact', component: CCComponent },
  { path: 'donate', component: DonateComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
