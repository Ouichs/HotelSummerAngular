import * as _ from 'lodash';
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

  listHotelByParams: Hotel[] = [];

  ville = "Lyon";

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
        this.getBedRooms();
      }
    })
  }

  getBedRooms(){
    this.listHotel.forEach(el => {
      console.log(el)
      this.hotelService.getBedRooms(el.id).subscribe({
        next:(data) =>{
          el['bedrooms'] = data
      },
      complete:() =>{

        }
      })
    })
  }

  getAddress(){
    this.listHotel.forEach(el => {
      console.log(el)
      this.hotelService.getHotelAdress(el.id).subscribe({
        next:(data) =>{
          el['adress'] = data
          el['city'] = data.city
      },
      complete:() =>{
        if(this.ville && el['adress']){
          if(el['city'] == this.ville){
            this.listHotelByParams.push(el)
            console.log(this.listHotelByParams)
            }
          } else{
            this.listHotelByParams = this.listHotel;
          }
        }
      })
    })
  }
}
