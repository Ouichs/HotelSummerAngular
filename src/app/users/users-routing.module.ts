
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const usersRoute: Routes = [



];

@NgModule({
  imports: [RouterModule.forChild(usersRoute)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
