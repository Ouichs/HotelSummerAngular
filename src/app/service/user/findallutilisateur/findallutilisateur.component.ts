import { Component, OnInit } from '@angular/core';
import { SrrCrudService } from 'src/app/class/servlet/srr-crud-service';
import { User } from 'src/app/class/user/user';

@Component({
  selector: 'app-findallutilisateur',
  templateUrl: './findallutilisateur.component.html',
  styleUrls: ['./findallutilisateur.component.scss']
})
export class FindallutilisateurComponent implements OnInit {

  myList: Array<User> | undefined;

  constructor(private srv: SrrCrudService) { }

  ngOnInit(): void {
    this.srv.getInfo();
    this.myList = JSON.parse(sessionStorage.getItem("lst"))
  }


}
