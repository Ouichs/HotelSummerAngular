import { Component, OnInit } from '@angular/core';
import { SrrCrudService } from 'src/app/class/servlet/srr-crud-service';



@Component({
  selector: 'app-newuser',
  templateUrl: './newuser.component.html',
  styleUrls: ['./newuser.component.scss']
})
export class NewuserComponent implements OnInit {

  constructor(private srv: SrrCrudService) { }
  user = { name: 0, firstName: '', email: "", password: "" }

  ngOnInit(): void {
  }
  create() {
    this.srv.create(this.user);
  }
}


