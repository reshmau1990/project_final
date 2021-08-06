import { Injectable } from '@angular/core';
import {HttpClient ,HttpResponse} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StudentserviceService {
  std= {
    fname:"",
    age:"",
    address:"",
    district:"",
    email:"",
    phno:"",
    dob:"",
    gender:"",
    quali:"",
    poy:"",
    skill:"",
    wstatus:"",
    techtrain:"",
    year:"",
    course:"",
    photo:""
  };
  constructor( private http:HttpClient) { }
  server_address:string = '/api';
  getStudent(id:any){
    return this.http.get(`${this.server_address}/adminhome/students/`+id);
  }
  getStudents(){
    return this.http.get(`${this.server_address}/adminhome/students`);
  }


  viewStudent(id:any){
    return this.http.get(`${this.server_address}/adminhome/dashboard/stdlist/`+id);
  }

  viewStudents(){
    return this.http.get(`${this.server_address}/adminhome/dashboard/stdlist`);
  }
  viewRegStudents(){
    return this.http.get(`${this.server_address}/adminhome/dashboard/stdreg`);
  }

  deleteStudent(id:any)
  {

    return this.http.delete(`${this.server_address}/adminhome/students/remove/`+id)

  }
  removeStudent(id:any)
  {
    return this.http.delete(`${this.server_address}/adminhome/dashboard/stdlist/remove/`+id)
  }

  // viewProf(id:any){
  //   return this.http.get(`${this.server_address}/adminhome/students/`+id);
  // }
  editStudent(student:any)
  {
    console.log('client update')
    return this.http.put(`${this.server_address}/adminhome/students/update`,student)
    .subscribe(data =>{console.log(data)})
  }
  approveStudent(student:any)
  {
    return this.http.post(`${this.server_address}/adminhome/dashboard/stdlist/student/approve`,student)
    .subscribe(data =>{console.log(data)})
  }

  viewProfile(id:any){
    return this.http.get(`${this.server_address}/studenthome/stdhome/`+id);
  }

  editprofile(student:any)
  {
    console.log('client update')
    return this.http.put(`${this.server_address}/studenthome/stdhome/editprofile`,student)
    .subscribe(data =>{console.log(data)})
  }
}
