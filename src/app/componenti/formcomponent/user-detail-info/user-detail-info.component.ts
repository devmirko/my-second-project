import { Component, Input,OnInit} from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective,Validators } from '@angular/forms';
import * as moment from 'moment';
import { DistrictService } from 'src/app/services/district.service';

@Component({
  selector: 'app-user-detail-info',
  templateUrl: './user-detail-info.component.html',
  styleUrls: ['./user-detail-info.component.css']
})
export class UserDetailInfoComponent implements OnInit {
@Input() formGroupName!: string
formDetails!: FormGroup
ProvincieItaliane: any
genre: any
constructor(private rootFormGroup: FormGroupDirective, private fb: FormBuilder, private provincie: DistrictService) {
  this.ProvincieItaliane = this.provincie.getProvincie()
  this.genre = this.provincie.getGenre()
}

ngOnInit(): void {
  this.formDetails = this.rootFormGroup.control.get(this.formGroupName) as FormGroup
  console.log(this.formDetails);

  this.formDetails.controls['dateBirth'].addValidators([Validators.required, this.ControlDate])
  this.formDetails.controls['genre'].addValidators([Validators.required])

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








}
