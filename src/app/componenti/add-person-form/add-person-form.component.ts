import { DatePipe } from '@angular/common';
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
        firstName: ['', Validators.required ],
        lastName: ['', Validators.required ],
        email: ['',  Validators.required]
      }),
      detailsInfo: this.fb.group({
        dateBirth: ['', Validators.required ],
        genre: [''],
        city: [null],
        district: [null],
        address: [null]
      }),
      passwordRequest: this.fb.group({
        password: ['', Validators.required],
        confirmPassword: ['', Validators.required ]
      })

    });

  }

}
