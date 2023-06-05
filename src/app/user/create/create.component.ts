import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent {

  userDetails : FormGroup;
  constructor(
    private http : HttpClient,
    private formBuilder : FormBuilder
    ){
      this.userDetails = formBuilder.group({
        name : new FormControl(),
        password : new FormControl(),
        mobileNumber : new FormControl()
      })
    }

  submit(){
    console.log(this.userDetails.value)
  }
}
