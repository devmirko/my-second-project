
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup} from '@angular/forms';
import * as moment from 'moment';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-add-person-form',
  templateUrl: './add-person-form.component.html',
  styleUrls: ['./add-person-form.component.css']
})
export class AddPersonFormComponent implements OnInit {

  userForm! : FormGroup;
  status = false


  constructor(private fb: FormBuilder, private firebase : FirebaseService){}

  ngOnInit(): void {

    this.userForm = this.fb.group({
      basicInfo: this.fb.group({
        firstName: [''],
        lastName: [''],
        email: ['']
      }),
      detailsInfo: this.fb.group({
        dateBirth: [moment()],
        genre: [''],
        city: [''],
        district: [''],
        address: [''],
        languages: this.fb.array([this.initLanguages()])
      }),
      passwordRequest: this.fb.group({
        password: [''],
        confirmPassword: ['']
      },{
        validator : this.Mustmatch("password", "confirmPassword")
      })

    });






  }


  onUpdate(){

    if (this.userForm.valid) {

        this.firebase.insertPersona(this.firebase.urlPerson + '.json', this.userForm.value).subscribe((data) => {
          console.log(data);

        });

        this.status = true
        this.userForm.reset()

    } else {
      this.status = false
      console.log("non tutti i campi sono corretti");

    }


  }


  Mustmatch(password:any ,confirmPassword: any ) {
    return (formgroup: FormGroup) => {
      const passwordcontrol = formgroup.controls[password]
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

  initLanguages() {
    return this.fb.group({
        name: [''],
        level: ['']
    });
}
















}
