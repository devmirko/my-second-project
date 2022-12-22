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


  // this.formPassword = this.fb.group({
  //   password: ['', [Validators.required,]],
  //   confirmPassword: ['', [Validators.required]]
  // },
  // {
  //   validators:this.Mustmatch('password','confirmPassword')
  // }
  // );




}

get password() { return this.formPassword.get('password'); }

get confirmPassword() { return this.formPassword.get('confirmPassword'); }



Mustmatch(password:any ,confirmPassword: any ) {
  return (formgroup: FormGroup) => {
    const passwordcontrol = formgroup.controls[password];
    const confirmPasswordcontrol = formgroup.controls[confirmPassword];

    if(confirmPasswordcontrol.errors && !confirmPasswordcontrol.errors['Mustmatch'] ){
      return;
    }

    if (passwordcontrol.value !== confirmPasswordcontrol.value ) {
      confirmPasswordcontrol.setErrors({Mustmatch: true})
    } else {
      confirmPasswordcontrol.setErrors(null)
    }

  };
}





}








