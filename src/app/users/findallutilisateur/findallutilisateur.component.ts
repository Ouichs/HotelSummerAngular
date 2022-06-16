import { HttpClient } from '@angular/common/http';
import { Component, EmbeddedViewRef, OnInit } from '@angular/core';
import { User } from 'src/app/users/shared/user';
import { UserRest } from '../shared/user-rest';
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
    this.init();

  }

  init() {
    this.http.get<UserRest>("http://localhost:8080/api/users").subscribe(
      response => {
        this.myList = response._embedded.users
      },
      err => {
        console.log("KO  init");
      }
    )
  }

  delete(u: User) {

    this.http.delete(u._links.self.href).subscribe(
      response => {
        this.message = "Utilisateur correctement supprimé !";
        this.init();
      },
      err => {
        this.message = "Erreur dans la suppression";
        console.log("KO delete");
        console.log(err)
      }
    )




  }



}
