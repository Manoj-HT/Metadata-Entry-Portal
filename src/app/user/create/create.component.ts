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
        firstName : new FormControl(),
        lastName : new FormControl(),
        password : new FormControl(),
        mobileNumber : new FormControl(),
        emailId : new FormControl()
      })
    }

  submit(){
    console.log(this.userDetails.value)
    let url = 'http://localhost:3000/userDetails'
    let body = this.userDetails.value
    this.http.post(url, body).subscribe({
      next : (arg) => {
        console.log(arg)
      }
    })
  }

  delete(){
    let url = 'http://localhost:3000/userDetails'
    let body = {"id" : "1"}
    this.http.delete(url).subscribe({
      next : (res) => {
          console.log(res)
      }
    })
  }
}
