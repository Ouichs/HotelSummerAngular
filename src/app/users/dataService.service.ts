import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  connection: string = sessionStorage.getItem("client")
  constructor() { }




}
