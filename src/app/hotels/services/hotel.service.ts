
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Adress } from '../class/adress';
import { BedRoomsRest } from '../class/bed-rooms-rest';
import { HotelRest } from '../class/hotel-rest';

@Injectable({
  providedIn: 'root'
})
export class HotelService {

  private baseUrl = 'http://localhost:8080/api/hotel';

  constructor(private httpClient: HttpClient) { }

  getHotelsList(): Observable<HotelRest[]> {
    return this.httpClient.get<GetResponseFindall>(this.baseUrl).pipe(
      map(response => response._embedded.hotel)
    );
  }

  getHotelbyId(id: number): Observable<HotelRest> {
    const searchUrl = `${this.baseUrl}/${id}`;
    return this.httpClient.get<HotelRest>(searchUrl);
  }
  getHotelAdress(id: number): Observable<Adress>{
    const searchUrl = `${this.baseUrl}/${id}/adress`;
    return this.httpClient.get<Adress>(searchUrl);
  }


}

interface GetResponseFindall {
  _embedded: {
    hotel: HotelRest[];
  }
}





