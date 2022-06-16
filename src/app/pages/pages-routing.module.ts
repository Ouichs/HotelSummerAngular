import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PageHotelFindComponent } from './page-hotel-find/page-hotel-find.component';
import { PageHotelListComponent } from './page-hotel-list/page-hotel-list.component';

const routes: Routes = [
  {path:'hotel/list', component: PageHotelListComponent},
  {path:'hotel/:id', component: PageHotelFindComponent},
  {path: '', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
