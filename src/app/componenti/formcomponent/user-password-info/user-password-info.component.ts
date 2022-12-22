import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormGroupDirective, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-password-info',
  templateUrl: './user-password-info.component.html',
  styleUrls: ['./user-password-info.component.css']
})
export class UserPasswordInfoComponent implements OnInit {
@Input() formGroupName!: string
formPassword!: FormGroup
constructor(private rootFormGroup: FormGroupDirective, private fb: FormBuilder) {}

ngOnInit(): void {
  this.formPassword = this.rootFormGroup.control.get(this.formGroupName) as FormGroup
  console.log(this.formPassword);

  this.formPassword.controls['password'].addValidators([Validators.required])
  this.formPassword.controls['confirmPassword'].addValidators([Validators.required])
   console.log(this.formPassword.controls);


}

}








