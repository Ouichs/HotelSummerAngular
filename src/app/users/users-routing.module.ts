
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../pages/home/home.component';
import { FindallutilisateurComponent } from './findallutilisateur/findallutilisateur.component';
import { InscriptionComponent } from './inscription/inscription.component';

const usersRoute: Routes = [
  { path: 'inscription', component: InscriptionComponent },
  { path: 'utilisateurs', component: FindallutilisateurComponent },
  { path: '', component: HomeComponent },

];

@NgModule({
  imports: [RouterModule.forChild(usersRoute)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
