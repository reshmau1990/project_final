import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployerService {
  item= {
    name:'',
    email:'',
    qualification:'',
    }
  constructor( private http:HttpClient) { }
  server_address:string = '/api';
  getEmployer(id:any){
    return this.http.get(`${this.server_address}/adminhome/employers/` +id);
    
  }
  getEmployers(){
    return this.http.get(`${this.server_address}/adminhome/employers`);
  }

  newEmployer(item:any)
  {   
    return this.http.post(`${this.server_address}/adminhome/employers/newEmployer/insert`,{"employer":item})
    .subscribe(data =>{console.log(data)})
  }
  
  deleteEmployer(id:any)
  {

    return this.http.delete(`${this.server_address}/adminhome/employers/remove/`+id)

  }
  editEmployer(employer:any)
  {
    console.log('client update')
    return this.http.put(`${this.server_address}`,employer)
    .subscribe(data =>{console.log(data)})
  }
}