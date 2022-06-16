import { Component, OnInit } from '@angular/core';

import { Adress } from '../class/adress';
import { Hotel } from '../class/hotel';
import { HotelRest } from '../class/hotel-rest';
import { HotelService } from '../services/hotel.service';


@Component({
  selector: 'app-hotel-list',
  templateUrl: './hotel-list.component.html',
  styleUrls: ['./hotel-list.component.scss']
})
export class HotelListComponent implements OnInit {

  id:number;
  hotel: Hotel;
  adress: Adress;
  listAdress: Adress[] = [];
  listHotel: Hotel[] = [];
  hotelsRest: HotelRest[];
  constructor(private hotelService: HotelService) { }

  ngOnInit(): void {
    this.listHotels();
  }

  listHotels(){
    this.hotelService.getHotelsList().subscribe({
      next:(data) =>{
        this.hotelsRest = data;
        data.map(
          (rest)=>{
            this.listHotel.push(new Hotel(rest))
          }
        )
      },
      complete:() =>{
        this.getAddress();
      }
    })
  }

  getAddress(){
  console.log(this.listHotel)
    this.listHotel.forEach(el => {
      this.hotelService.getHotelAdress(el.id).subscribe(
        data =>{
         el['adress'] = data
           console.log(el)
      })
    })
  }



}
