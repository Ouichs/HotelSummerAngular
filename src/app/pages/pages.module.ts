import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CoreModule } from '../core/core.module';
import { HotelsModule } from '../hotels/hotels.module';
import { HomeComponent } from './home/home.component';
import { PageHotelFindComponent } from './page-hotel-find/page-hotel-find.component';
import { PageHotelListComponent } from './page-hotel-list/page-hotel-list.component';
import { PagesRoutingModule } from './pages-routing.module';


@NgModule({
  declarations: [
    HomeComponent,
    PageHotelFindComponent,
    PageHotelListComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    CoreModule,
    HotelsModule
  ]
})
export class PagesModule { }
