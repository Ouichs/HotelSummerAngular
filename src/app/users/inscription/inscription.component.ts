import { Component, OnInit } from '@angular/core';
import { UsersRestApiService } from '../shared/users-rest-api.service';


@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.scss']
})
export class InscriptionComponent implements OnInit {


  message!: string
  constructor(private srv: UsersRestApiService) { }
  user = { name: "", firstName: "", email: "", password: "" }

  ngOnInit(): void {
  }
  subscribe() {
    this.srv.create(this.user);
  }

}
