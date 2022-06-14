import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
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

  constructor(private srv: UsersRestApiService, private http: HttpClient) {

  }

  ngOnInit() {



    this.myList = JSON.parse(sessionStorage.getItem("lst"))._embedded.users
    console.log("hllo" + this.myList)

  }

  init() {
    this.srv.getInfo();
  }



  delete(user: User) {
    this.http.delete("http://localhost:8080/users/" + user.id).subscribe(
      response => {
        this.message = "Utilisateur supprimé";
        this.init();
      },
      err => {
        this.message = "Erreur dans la suppression";
        console.log("KO");
      }
    )

  }


}
