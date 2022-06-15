import { Component, OnInit } from '@angular/core';
import { UsersRestApiService } from '../shared/users-rest-api.service';
import { Router } from '@angular/router';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.scss']
})
export class InscriptionComponent implements OnInit {

  message: string
  constructor(private srv: UsersRestApiService, private router: Router
  ) { }
  user = { name: "", firstname: "", email: "", password: "" }

  ngOnInit(): void {
  }
  subscribe() {

    if (this.srv.create(this.user) != null) {
      console.log(this.srv.create(this.user));
      this.message = "inscription russit"

    } else {
      this.router.navigate(['/acceuil']);
      sessionStorage.setItem("client", this.user.name)
    }

  }

}
