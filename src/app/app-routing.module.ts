import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TemanComponent } from './teman/teman.component';


const routes: Routes = [
  {path : 'home', component: HomeComponent},
  {path : 'teman', component : TemanComponent},
  {path : 'contact-us', component : ContactUsComponent},
  {path : '404-not-found', component : PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
