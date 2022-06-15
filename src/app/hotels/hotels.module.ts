import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HotelsRoutingModule } from './hotels-routing.module';
import { HotelListComponent } from './hotel-list/hotel-list.component';
import { HotelFilterComponent } from './hotel-filter/hotel-filter.component';
import { HotelFindComponent } from './hotel-find/hotel-find.component';
import { PagesModule } from './pages/pages.module';



@NgModule({
  declarations: [
    HotelListComponent,
    HotelFilterComponent,
    HotelFindComponent
  ],
  imports: [
    CommonModule,
    HotelsRoutingModule,
    PagesModule,

  ]
})
export class HotelsModule { }
