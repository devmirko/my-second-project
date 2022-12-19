import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective,  Validators } from '@angular/forms';

@Component({
  selector: 'app-user-basic-info',
  templateUrl: './user-basic-info.component.html',
  styleUrls: ['./user-basic-info.component.css']
})
export class UserBasicInfoComponent implements OnInit {
@Input() formGroupName!: string
@Output() Validazione = new EventEmitter();
formBasic!: FormGroup
  constructor(private rootFormGroup: FormGroupDirective, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.formBasic = this.rootFormGroup.control.get(this.formGroupName) as FormGroup


    this.formBasic = this.fb.group({
        firstName: ['', Validators.required ],
        lastName: ['', Validators.required ],
        email: ['',  Validators.required]
      });

      this.MandaValidazione()



  }

  MandaValidazione(){
    this.Validazione.emit(this.formBasic)
  }

}
