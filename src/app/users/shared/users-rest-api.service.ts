import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UsersRestApiService {


  user: User = new User();
  message: string | undefined;
  id: number | undefined

  constructor(private http: HttpClient) { }
  create(data: any) {
    const body = JSON.stringify(data);
    this.http.post("http://localhost:8080/api/users", body, {
      headers: new HttpHeaders({
        "Content-Type": "application/json"

      })
    }).subscribe(
      response => { console.log("crud service est ok") },

      err => { console.log(err) });
  }

  getInfo() {
    this.http.get<Array<User>>("http://localhost:8080/api/users").subscribe(
      response => {
        sessionStorage.setItem("lst", JSON.stringify(response))

      },
      err => {
        console.log("KO");
      }
    )
  }

}