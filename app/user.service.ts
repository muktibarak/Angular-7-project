import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './model/user.interface';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  user: any;
  constructor(
    private httpClient: HttpClient
  ) { }

  getUsers(): Observable<User[]>{
    return this.httpClient.get<User[]>('http://localhost:8080/user/getUsers');
  }

  createUser(user): Observable<any> {
    return this.httpClient.post<any>('http://localhost:8080/user/postUser', user);
}
  
  deleteUser(userId: number): Observable<User> {
   // console.log('in service', userId);
   return this.httpClient.delete<User>('http://localhost:8080/user/deleteUser/' + userId);
  }

 
 
  putUser(user): Observable<User> {
   // console.log('user updated');
    return this.httpClient.put<User>('http://localhost:8080/user/putUser/' + user.id, user);
  }
  
}

