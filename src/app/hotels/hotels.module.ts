import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { HotelFilterComponent } from './hotel-filter/hotel-filter.component';
import { HotelFindComponent } from './hotel-find/hotel-find.component';
import { HotelListComponent } from './hotel-list/hotel-list.component';





@NgModule({
  declarations: [
    HotelListComponent,
    HotelFilterComponent,
    HotelFindComponent
  ],
  imports: [
    CommonModule,

  ],
  exports:[
    HotelListComponent,
    HotelFilterComponent,
    HotelFindComponent
  ]
})
export class HotelsModule { }
