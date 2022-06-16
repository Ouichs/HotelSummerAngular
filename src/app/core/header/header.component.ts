import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { DataServiceService } from 'src/app/users/dataService.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})




export class HeaderComponent implements OnInit {


  isAvailable = false;
  isAvailable$: Observable<boolean>
  utilsateur: string
  constructor(public route: Router, public data: DataServiceService) { }

  ngOnInit(): void {

    this.utilsateur = this.data.connection


    if (this.utilsateur === null) {
      //console.log(this.utilsateur)
    } else {
      this.isAvailable = true


    }
  }



}
