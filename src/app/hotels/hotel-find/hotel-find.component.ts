import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Adress } from '../class/adress';
import { BedRoomsRest } from '../class/bed-rooms-rest';
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
  bedrooms: BedRoomsRest;
  listbedrooms:BedRoomsRest[] = [];
  id: number;
  constructor(private hotelService: HotelService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params =>{
      this.id = Number.parseInt(params.get('id'));
      
    })

    this.getHotelbyId(this.id);
    this.getAdressbyId(this.id);
    this.getBedroom(this.id);
  
  }

  getHotelbyId(id: number){
    this.hotelService.getHotelbyId(id).subscribe(
      data =>{
        this.hotel = data;
          console.log(data)
    })
  }

  getBedroom(id: number){
    this.hotelService.getBedRooms(id).subscribe(
      data =>{
        console.log(data._embedded.bedroom)
         this.listbedrooms = data._embedded.bedroom;
         console.log(this.listbedrooms)
    })
  }

  getAdressbyId(id: number){
    this.hotelService.getHotelAdress(id).subscribe(
      data =>{
        this.adress = data;
         //console.log(data)
    })
  }

  reserver(){
    
  }
}
