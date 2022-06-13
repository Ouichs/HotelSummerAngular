import { Component, OnInit } from '@angular/core';
import { UsersRestApiService } from '../shared/users-rest-api.service';



@Component({
  selector: 'app-newuser',
  templateUrl: './newuser.component.html',
  styleUrls: ['./newuser.component.scss']
})
export class NewuserComponent implements OnInit {

  constructor(private srv: UsersRestApiService) { }
  user = { name: 0, firstName: '', email: "", password: "" }

  ngOnInit(): void {
  }
  create() {
    this.srv.create(this.user);
  }
}


