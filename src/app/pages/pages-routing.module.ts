import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from '../facturation/cart/cart.component';
import { CommandeComponent } from '../facturation/commande/commande.component';
import { FindallutilisateurComponent } from '../users/findallutilisateur/findallutilisateur.component';
import { InscriptionComponent } from '../users/inscription/inscription.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'inscription', component: InscriptionComponent },
  { path: 'utilisateurs', component: FindallutilisateurComponent },
  { path: '', component: HomeComponent },
  { path: 'panier', component: CartComponent },
  { path: 'user/commande', component: CommandeComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
