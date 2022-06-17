import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';



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
  constructor(private router: Router) { }

  ngOnInit(): void {
    if(sessionStorage.getItem("ville")){
      this.ville = sessionStorage.getItem("ville");
    }
    if(sessionStorage.getItem("nb")){
      this.NbPersonnes = sessionStorage.getItem("nb");
    }
    if(sessionStorage.getItem("dateStart")){
      this.startDate = sessionStorage.getItem("dateStart");
    }
    if(sessionStorage.getItem("endDate")){
      this.endDate = sessionStorage.getItem("endDate");
    }
    
  }

  researchInfo(){
    if(this.ville){
      sessionStorage.setItem("ville",this.ville);
    } else{
      sessionStorage.removeItem("ville");
    }

    if(this.NbPersonnes){
      sessionStorage.setItem("nb", this.NbPersonnes)
    }else{
      sessionStorage.removeItem("nb");
    }

    if(this.startDate){
      sessionStorage.setItem("dateStart", this.startDate)
    }else{
      sessionStorage.removeItem("dateStart");
    }
    if(this.endDate){
      sessionStorage.setItem("endDate", this.endDate)
    }else{
      sessionStorage.removeItem("endDate");
    }
    

    this.router.navigate(['/hotel/list'])
  }


  

  

}
