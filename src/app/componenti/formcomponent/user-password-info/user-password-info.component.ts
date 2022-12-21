import { Component, Input, Output, EventEmitter,  OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormGroupDirective, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-password-info',
  templateUrl: './user-password-info.component.html',
  styleUrls: ['./user-password-info.component.css']
})
export class UserPasswordInfoComponent implements OnInit {
@Input() formGroupName!: string
@Output() validationPassword = new EventEmitter()
formPassword!: FormGroup
constructor(private rootFormGroup: FormGroupDirective, private fb: FormBuilder) {}

ngOnInit(): void {
  this.formPassword = this.rootFormGroup.control.get(this.formGroupName) as FormGroup
  console.log(this.formPassword);

  this.formPassword = this.fb.group({
    password: ['', [Validators.required,]],
    confirmPassword: ['', [Validators.required] ]
  });

  this.MandaValidazione()


}

MandaValidazione(){
  this.validationPassword.emit(this.formPassword)
}

}
