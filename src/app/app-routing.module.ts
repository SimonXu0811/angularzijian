import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AboutpageComponent} from "./aboutpage/aboutpage.component";
import {HomepageComponent} from "./homepage/homepage.component";
import {IampageComponent} from "./iampage/iampage.component";


const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomepageComponent},
  {path: 'about', component: AboutpageComponent},
  {path: 'iam', component: IampageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
