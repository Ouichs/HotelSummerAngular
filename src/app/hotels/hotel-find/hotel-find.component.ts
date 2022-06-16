import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Adress } from '../class/adress';
import { HotelRest } from '../class/hotel-rest';
import { HotelService } from '../services/hotel.service';

@Component({
  selector: 'app-hotel-find',
  templateUrl: './hotel-find.component.html',
  styleUrls: ['./hotel-find.component.scss']
})
export class HotelFindComponent implements OnInit {
  hotel: HotelRest;
  adress: Adress;
  id: number;
  constructor(private hotelService: HotelService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params =>{
      this.id = Number.parseInt(params.get('id'));
      
    })

    this.getHotelbyId(this.id);
    this.getAdressbyId(this.id);
  
  }

  getHotelbyId(id: number){
    this.hotelService.getHotelbyId(id).subscribe(
      data =>{
        this.hotel = data;
          console.log(data)
    })
  }

  getAdressbyId(id: number){
    this.hotelService.getHotelAdress(id).subscribe(
      data =>{
        this.adress = data;
         console.log(data)
    })
  }
}
