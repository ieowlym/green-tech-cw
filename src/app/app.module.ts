import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './cw-about/cw-about.component';
import { ActionComponent } from './cw-action/cw-action.component';
import { CCComponent } from './cw-cc/cw-cc.component';
import { CountrySVGComponent } from './cw-country/cw-country.component';
import { DonateComponent } from './cw-donate/cw-donate.component';
import { IndexComponent } from './cw-index/cw-index.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    AboutComponent,
    CountrySVGComponent,
    ActionComponent,
    CCComponent,
    DonateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
