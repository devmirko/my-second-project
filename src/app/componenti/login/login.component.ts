import { Component } from '@angular/core';
import {  NgForm } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(){}

  onSubmit(form : NgForm) {
    const email = form.value.email
    const password = form.value.password

  }

}
