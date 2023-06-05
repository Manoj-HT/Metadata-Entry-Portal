import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  constructor (
    private http : HttpClient,
    private router : Router
  ) {

  }
  ngOnInit(): void {
    this.fetchDetails()
  }

  userDetails : any
  fetchDetails(){
    let url = 'http://localhost:3000/userDetails'
    this.http.get(url).subscribe({
      next : (res) => {
          this.userDetails = res
          for(let ele of this.userDetails){
            if(ele['firstName'] == 'Shubham'){
              if(ele['password'] == '123'){
                this.router.navigate(['reviewer','list'])
              }
            }
          }
      }
    })
  }

}
