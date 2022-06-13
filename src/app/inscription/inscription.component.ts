import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.scss']
})
export class InscriptionComponent implements OnInit {



  button = { name: "", firstName: "", mail: "", password: 0 };
  message: string | undefined
  constructor() { }

  ngOnInit(): void {
  }

  subscribe() {
    this.message = this.button.name
    this.message = this.button.firstName
    this.message = this.button.mail

  }


}
