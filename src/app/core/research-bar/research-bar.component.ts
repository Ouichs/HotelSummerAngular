import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-research-bar',
  templateUrl: './research-bar.component.html',
  styleUrls: ['./research-bar.component.scss']
})
export class ResearchBarComponent implements OnInit {

  ville: string;
  startDate: string;
  endDate:string;
  NbPersonnes: string;
  constructor() { }

  ngOnInit(): void {

  }

  researchInfo(){
    sessionStorage.setItem("ville",this.ville);
    sessionStorage.getItem("ville")
  }

  

  

}
