import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NavbarComponent} from './navbar/navbar.component';
import {MatSidenavModule} from "@angular/material/sidenav";
import {CollapseComponent} from './homepage/components/collapse-framework/collapse.component';
import {CardComponent} from './homepage/components/skill-card/card.component';
import {AboutpageComponent} from './aboutpage/aboutpage.component';
import {HomepageComponent} from './homepage/homepage.component';
import {MatIconModule} from "@angular/material/icon";
import {HashLocationStrategy, LocationStrategy} from "@angular/common";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CollapseComponent,
    CardComponent,
    AboutpageComponent,
    HomepageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatIconModule
  ],
  providers: [
    {provide: LocationStrategy, useClass: HashLocationStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
