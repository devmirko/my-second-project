import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { AddPersonFormComponent } from './componenti/add-person-form/add-person-form.component';
import { DashboardComponent } from './componenti/dashboard/dashboard.component';
import { LoginComponent } from './componenti/login/login.component';
import { Pagina1Component } from './componenti/pagina1/pagina1.component';
import { RegisterComponent } from './componenti/register/register.component';

const routes: Routes = [
  { path: '', pathMatch:'full', redirectTo: '/AddPersonForm' },
  {path: "", component: DashboardComponent, canActivate: [AuthGuard], children: [
    {path:'AddPersonForm', component: AddPersonFormComponent},
    {path:'pagina1', component: Pagina1Component},


  ]},
  {path: "login", component: LoginComponent},
  {path: "register", component: RegisterComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
