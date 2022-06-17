import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from '../facturation/cart/cart.component';
import { CommandeComponent } from '../facturation/commande/commande.component';
import { FindallutilisateurComponent } from '../users/findallutilisateur/findallutilisateur.component';
import { InscriptionComponent } from '../users/inscription/inscription.component';
import { HomeComponent } from './home/home.component';
import { PageHotelFindComponent } from './page-hotel-find/page-hotel-find.component';
import { PageHotelListComponent } from './page-hotel-list/page-hotel-list.component';

const routes: Routes = [
  {path:'hotel/list', component: PageHotelListComponent},
  {path:'hotel/:id', component: PageHotelFindComponent},
  // { path: 'inscription', component: InscriptionComponent },
  { path: 'utilisateurs', component: FindallutilisateurComponent },
  { path: 'panier', component: CartComponent },
  { path: 'user/commande', component: CommandeComponent },
  { path: '', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
