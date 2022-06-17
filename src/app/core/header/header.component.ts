import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiAuthService } from 'src/app/auth/api-auth.service';
import { DataServiceService } from 'src/app/users/dataService.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})




export class HeaderComponent implements OnInit {

  loggedin:boolean
  isAvailable = false;
  isAvailable$: Observable<boolean>
  utilsateur: string
  constructor(public route: Router, public data: DataServiceService, private serv:ApiAuthService) { }

  ngOnInit(): void {
    this.loggedin = this.serv.isLoggedIn
    this.utilsateur = this.data.connection


    if (this.utilsateur === null) {
      //console.log(this.utilsateur)
    } else {
      this.isAvailable = true


    }
  }

  logout() {
    this.serv.doLogout()
    this.loggedin = this.serv.isLoggedIn
    this.ngOnInit()
  }

}
