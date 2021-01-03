import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { BugsComponent } from './bugs/bugs.component';
// import { BugDetailsComponent } from './bug-details/bug-details.component';
import { NoPageFoundComponent } from './no-page-found/no-page-found.component';
import { AddNewComponent } from './bugs/add-new/add-new.component';
import { DetailsComponent } from './bugs/details/details.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AboutComponent,
    ContactComponent,
    BugsComponent,
    // BugDetailsComponent,
    NoPageFoundComponent,
    AddNewComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
