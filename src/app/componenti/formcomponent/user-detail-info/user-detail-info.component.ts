import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'app-user-detail-info',
  templateUrl: './user-detail-info.component.html',
  styleUrls: ['./user-detail-info.component.css']
})
export class UserDetailInfoComponent implements OnInit {
@Input() formGroupName!: string
formDetails!: FormGroup
constructor(private rootFormGroup: FormGroupDirective) {}

ngOnInit(): void {
  this.formDetails = this.rootFormGroup.control.get(this.formGroupName) as FormGroup
  console.log(this.formDetails);


}

}
