import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageHotelListComponent } from './page-hotel-list/page-hotel-list.component';
import { PageHotelFindComponent } from './page-hotel-find/page-hotel-find.component';



@NgModule({
  declarations: [
 
    PageHotelListComponent,
      PageHotelFindComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PagesModule { }
