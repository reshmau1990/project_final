import { Injectable } from '@angular/core';
import {HttpClient ,HttpResponse} from '@angular/common/http'
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  user= {
    fname:'',
    quali:'',
    username:'',
    email:'',
    password:''
  }

  constructor(private http:HttpClient,private router: Router) { }
  server_address:string = '/api';
  newUserData(user:any)
  {   
    // return this.http.post(`${this.server_address}/studentsignup/insert`,{"item":user})
    return this.http.post(`${this.server_address}/signup/insert`,{"item":user})
  }
}
