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

    this.router.navigate(['/hotel/list'])
  }


  

  

}
