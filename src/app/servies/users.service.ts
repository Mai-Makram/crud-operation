import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  url="http://task.soft-zone.net/api/Employees/"
  constructor( private http:HttpClient) { }

  getUser(){
    return this.http.get(this.url + 'getAllEmployees')
  }
  getIDUser(id:any){
    return this.http.get(this.url + 'getEmpByID/' + id)
  }
  addusers(post:any){
    return this.http.post(this.url + 'addEmployee',post)
  }

  deleteusers(id:any){
    return this.http.get(this.url + 'deleteEmpByID/' + id)
  }

  updateusers(id:any, post:any){
    return this.http.post(this.url +'editEmployee/' , post)
  }
}
