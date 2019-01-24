import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemanComponent } from './teman/teman.component';
import { TemanAddComponent } from './teman/teman-add/teman-add.component';
import { TemanListComponent } from './teman/teman-list/teman-list.component';
import { HoverHiglightDirective } from './hover-higlight.directive';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

@NgModule({
  declarations: [
    AppComponent,
    TemanComponent,
    TemanAddComponent,
    TemanListComponent,
    HoverHiglightDirective,
    HomeComponent,
    HeaderComponent,
    PageNotFoundComponent,
    ContactUsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
