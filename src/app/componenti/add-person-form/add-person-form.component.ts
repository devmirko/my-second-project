import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validator, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-person-form',
  templateUrl: './add-person-form.component.html',
  styleUrls: ['./add-person-form.component.css']
})
export class AddPersonFormComponent implements OnInit {

  userForm! : FormGroup;

  constructor(private fb: FormBuilder){}

  ngOnInit(): void {

    this.userForm = this.fb.group({
      basicInfo: this.fb.group({
        firstName: [],
        lastName: [],
        email: []
      }),
      detailsInfo: this.fb.group({
        dateBirth: [],
        genre: [],
        city: [],
        district: [],
        address: []
      }),
      passwordRequest: this.fb.group({
        password: [],
        confirmPassword: []
      })

    });

  }

}
