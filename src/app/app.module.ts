import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './componenti/login/login.component';
import { RegisterComponent } from './componenti/register/register.component';
import { DashboardComponent } from './componenti/dashboard/dashboard.component';
import { Pagina1Component } from './componenti/pagina1/pagina1.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { AddPersonFormComponent } from './componenti/add-person-form/add-person-form.component';
import { UserBasicInfoComponent } from './componenti/formcomponent/user-basic-info/user-basic-info.component';
import { MatInputModule } from "@angular/material/input";
import { MatCardModule } from "@angular/material/card";
import { UserDetailInfoComponent } from './componenti/formcomponent/user-detail-info/user-detail-info.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatSelectModule} from '@angular/material/select';
import { UserPasswordInfoComponent } from './componenti/formcomponent/user-password-info/user-password-info.component';





@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    Pagina1Component,
    AddPersonFormComponent,
    UserBasicInfoComponent,
    UserDetailInfoComponent,
    UserPasswordInfoComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatToolbarModule,
    MatIconModule,
    MatInputModule,
    MatCardModule,
    CommonModule,
    MatDatepickerModule,
    MatSelectModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
