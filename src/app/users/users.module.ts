import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { FindallutilisateurComponent } from './findallutilisateur/findallutilisateur.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { NewuserComponent } from './newuser/newuser.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    InscriptionComponent,
    NewuserComponent,
    FindallutilisateurComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    FormsModule

  ]
})
export class UsersModule { }
