import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { retry } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  constructor(
    private http : HttpClient
  ) { }

  /*List of Variables*/

  //loadConfig()
  domain : any
  //loadPathUrl()
  endPoint : any

  /* List of Functions */

  loadConfig(){
    return this.http.get('./assets/config/config.json').subscribe((res)=>{
      this.domain = res
    })
  }

  loadPathUrl(){
    return this.http.get('./assets/config/pathUrl.json').subscribe((res) => {
      this.endPoint = res
    })
  }
}
