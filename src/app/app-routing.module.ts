import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InscriptionComponent } from './inscription/inscription.component';
import { FindallutilisateurComponent } from './service/user/findallutilisateur/findallutilisateur.component';

const routes: Routes = [

  { path: 'inscription', component: InscriptionComponent },
  { path: 'utilisateurs', component: FindallutilisateurComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
