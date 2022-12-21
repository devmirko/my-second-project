import { Component, Input, Output,OnInit, EventEmitter, ViewChild } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, FormGroupDirective, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import * as moment from 'moment';

@Component({
  selector: 'app-user-detail-info',
  templateUrl: './user-detail-info.component.html',
  styleUrls: ['./user-detail-info.component.css']
})
export class UserDetailInfoComponent implements OnInit {
@Input() formGroupName!: string
@Output() validationDetails = new EventEmitter();
formDetails!: FormGroup
constructor(private rootFormGroup: FormGroupDirective, private fb: FormBuilder) {}

ngOnInit(): void {
  this.formDetails = this.rootFormGroup.control.get(this.formGroupName) as FormGroup
  console.log(this.formDetails);

  this.formDetails = this.fb.group({
    dateBirth: [moment(), [Validators.required, this.ControlDate]],
    genre: ['', Validators.required],
    city: [null],
    district: [null],
    address: [null]
  });






  this.MandaValidazione()

}



ControlDate( control: FormControl ){
  const dateBirth = moment(control.value,'mm-dd-yyyy')
  console.log(dateBirth);

  const Control = moment().subtract(18,'years')
  console.log(Control);

  if(dateBirth.isBefore(Control)){
    return null
  }
  return {invalid : true}
}













MandaValidazione(){
  this.validationDetails.emit(this.formDetails)
}




}
