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

  constructor(private srv: UsersRestApiService) {

  }

  ngOnInit(): void {
    this.srv.getInfo();
    this.myList = JSON.parse(sessionStorage.getItem("lst"))


  }


}
