import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../user/list-users/list-users.component';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseURI : string ="https://jsonplaceholder.cypress.io/";
  constructor(private http: HttpClient) { }

  listUsers(){
    return this.http.get<User[]>(this.baseURI + 'users');
  }

  viewUser(id: string){
    return this.http.get(this.baseURI + 'users/' + id );
  }

  addUser(userObj: any){
    return this.http.post(this.baseURI + 'users' , userObj );
  }

  deleteUser(id: any){
    return this.http.delete(this.baseURI + 'users/' + id );
  }

  updateUser(id: any ,userObj: any){
    return this.http.put(this.baseURI + 'users/' + id, userObj );
  }
}
