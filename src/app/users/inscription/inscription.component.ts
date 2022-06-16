import { Component, Injectable, OnInit, SimpleChanges } from '@angular/core';
import { UsersRestApiService } from '../shared/users-rest-api.service';
import { Router } from '@angular/router';
import { HttpResponse } from '@angular/common/http';

import { BehaviorSubject } from 'rxjs';



@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.scss']
})


@Injectable()
export class InscriptionComponent implements OnInit {
  message: string

  public isUserLoggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  constructor(private srv: UsersRestApiService, private router: Router
  ) { }
  user = { name: "", firstname: "", email: "", password: "" }

  ngOnInit(): void {
    console.log("oninit" + this.srv.create(this.user))
  }

  subscribe() {
    // Renvoie true si les opérandes sont différents.
    if (this.srv.create(this.user) != null) {
      console.log(this.srv.create(this.user));
      this.message = "inscription russit"

    } else {
      console.log("else" + this.srv.create(this.user));
      this.router.navigateByUrl("")
      sessionStorage.setItem("client", this.user.name)
    }

  }

}
