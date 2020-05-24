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
import { CollapseLanguageComponent } from './homepage/components/collapse-language/collapse-language.component';
import { CollapseToolComponent } from './homepage/components/collapse-tool/collapse-tool.component';
import {ReactiveFormsModule} from "@angular/forms";
import { JumbotronGuessComponent } from './aboutpage/components/jumbotron-guess/jumbotron-guess.component';
import { IampageComponent } from './iampage/iampage.component';
import { CardContactComponent } from './iampage/components/card-contact/card-contact.component';
import { CardWorkComponent } from './iampage/components/card-work/card-work.component';
import { CardEducationComponent } from './iampage/components/card-education/card-education.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CollapseComponent,
    CardComponent,
    AboutpageComponent,
    HomepageComponent,
    CollapseLanguageComponent,
    CollapseToolComponent,
    JumbotronGuessComponent,
    IampageComponent,
    CardContactComponent,
    CardWorkComponent,
    CardEducationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatIconModule,
    ReactiveFormsModule
  ],
  providers: [
    {provide: LocationStrategy, useClass: HashLocationStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
