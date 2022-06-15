import { HttpClient } from '@angular/common/http';
import { Component, EmbeddedViewRef, OnInit } from '@angular/core';
import { User } from 'src/app/users/shared/user';
import { UsersRestApiService } from '../shared/users-rest-api.service';


@Component({
  selector: 'app-findallutilisateur',
  templateUrl: './findallutilisateur.component.html',
  styleUrls: ['./findallutilisateur.component.scss']
})
export class FindallutilisateurComponent implements OnInit {

  myList: Array<User>
  message: string;

  hello: string
  constructor(private srv: UsersRestApiService, private http: HttpClient) {

  }

  ngOnInit(): void {
    this.srv.getInfo();
    this.myList = JSON.parse(sessionStorage.getItem("lst"))._embedded.users
    this.init();

  }

  init() {
    this.http.get<Array<User>>("http://localhost:8080/users/").subscribe(
      response => {
        this.myList = response
        this.hello = JSON.stringify(response)
      },
      err => {
        console.log("KO");
      }
    )
  }

  delete(u: User) {
    this.http.delete("http://localhost:8080/users/" + u.id).subscribe(
      response => {
        this.message = "Article supprimé";
        this.init();
      },
      err => {
        this.message = "Erreur dans la suppression";
        console.log("KO");
      }
    )

  }



}
