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

  getInfo() {
    this.http.get<Array<User>>("http://localhost:8080/users").subscribe({
      next: (v) => sessionStorage.setItem("lst", JSON.stringify(v)),
      error: (e) => console.error(e),
      complete: () => console.info('complete')
    })
  }




  create(data: any) {

    const body = JSON.stringify(data);
    this.http.post("http://localhost:8080/users", body, {
      headers: new HttpHeaders({
        "Content-Type": "application/json"

      })
    }).subscribe({
      next: (v) => console.log("ncrudService next" + v),
      error: (e) => console.error(e),
      complete: () => console.info('complete')
    })

  }



}