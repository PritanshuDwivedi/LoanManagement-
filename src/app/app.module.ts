import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatCardModule } from "@angular/material/card";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatButtonModule } from "@angular/material/button";
import { FlexLayoutModule } from "@angular/flex-layout";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { UserSearchLoanComponent } from './user-search-loan/user-search-loan.component';
import { AdminAddLoanComponent } from './admin-add-loan/admin-add-loan.component';
import { AdminUpdateLoanComponent } from './admin-update-loan/admin-update-loan.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FooterComponent } from './footer/footer.component';
import { from } from 'rxjs';
import { LoanService } from './loan.service';
import { AdminEditLoanComponent } from './admin-edit-loan/admin-edit-loan.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    HomePageComponent,
    UserSearchLoanComponent,
    AdminAddLoanComponent,
    AdminUpdateLoanComponent,
    PageNotFoundComponent,
    FooterComponent,
    AdminEditLoanComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    MatToolbarModule,
    MatButtonModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([]),
  ],
  providers: [],
  bootstrap: [AppComponent,LoginPageComponent,
    HomePageComponent,
    UserSearchLoanComponent,
    AdminAddLoanComponent,
    AdminUpdateLoanComponent,
    PageNotFoundComponent,
    FooterComponent,
    AdminEditLoanComponent]
})
export class AppModule { }
