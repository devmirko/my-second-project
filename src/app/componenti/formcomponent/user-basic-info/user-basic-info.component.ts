import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormGroupDirective,  Validators } from '@angular/forms';

@Component({
  selector: 'app-user-basic-info',
  templateUrl: './user-basic-info.component.html',
  styleUrls: ['./user-basic-info.component.css']
})
export class UserBasicInfoComponent implements OnInit {
@Input() formGroupName!: string
formBasic!: FormGroup
  constructor(private rootFormGroup: FormGroupDirective, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.formBasic = this.rootFormGroup.control.get(this.formGroupName) as FormGroup

    console.log(this.formBasic)
    this.formBasic.controls['firstName'].addValidators([Validators.required, Validators.minLength(2)])
    this.formBasic.controls['lastName'].addValidators([Validators.required, Validators.minLength(2)])
    this.formBasic.controls['email'].addValidators([Validators.required, Validators.email])


  }






}
