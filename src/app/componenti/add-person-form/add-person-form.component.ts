import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validator, Validators } from '@angular/forms';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-add-person-form',
  templateUrl: './add-person-form.component.html',
  styleUrls: ['./add-person-form.component.css']
})
export class AddPersonFormComponent implements OnInit {

  userForm! : FormGroup;
  validationBasicInfo! : FormGroup;
  validationDetails! : FormGroup;
  validationPassword! : FormGroup;
  status = true


  constructor(private fb: FormBuilder, private firebase : FirebaseService){}

  ngOnInit(): void {

    this.userForm = new FormGroup({
      basicInfo : new FormGroup({
        firstName: new FormControl(''),
        lastName:  new FormControl(''),
        email:  new FormControl('')
      }),
      detailsInfo : new FormGroup({
        dateBirth:  new FormControl(''),
        genre:  new FormControl(''),
        city:  new FormControl(''),
        district:  new FormControl(''),
        address:  new FormControl(''),
      }),
      passwordRequest : new FormGroup({
        password: new FormControl(''),
        confirmPassword: new FormControl(''),
      }),

    })






  }


  onUpdate(){

   console.log( this.validationBasicInfo.controls['firstName'].value);


    if (this.validationBasicInfo.valid &&
      this.validationDetails.valid     &&
      this.validationPassword.valid) {

        this.firebase.insertPersona(this.firebase.urlPerson + '.json', {
          basicInfo: this.validationBasicInfo.value,
          detailsInfo: this.validationDetails.value,
          passwordRequest: this.validationPassword.value
        }).subscribe((data) => {
          console.log(data);

        });

        this.status = true

    } else {
      this.status = false
      console.log("non tutti i campi sono corretti");

    }


  }


  RiceviValidazione(value : FormGroup){
  this.validationBasicInfo = value


  }

  RiceviValidazioneDetails(value : FormGroup){
    this.validationDetails = value

  }

  RiceviValidazionePassword(value : FormGroup){
    this.validationPassword = value

  }


  setForm(){
    this.userForm.setValue({

    })
  }

}
