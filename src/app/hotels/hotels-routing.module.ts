import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageHotelFindComponent } from './pages/page-hotel-find/page-hotel-find.component';
import { PageHotelListComponent } from './pages/page-hotel-list/page-hotel-list.component';

const routes: Routes = [
  {path:'hotel/list', component: PageHotelListComponent},
  {path:'hotel/:id', component: PageHotelFindComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HotelsRoutingModule { }
