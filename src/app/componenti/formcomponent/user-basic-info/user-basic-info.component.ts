import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'app-user-basic-info',
  templateUrl: './user-basic-info.component.html',
  styleUrls: ['./user-basic-info.component.css']
})
export class UserBasicInfoComponent implements OnInit {
@Input() formGroupName!: string
formBasic!: FormGroup
  constructor(private rootFormGroup: FormGroupDirective) {}

  ngOnInit(): void {
    this.formBasic = this.rootFormGroup.control.get(this.formGroupName) as FormGroup
    console.log(this.formBasic);


  }

}
