import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { FindallutilisateurComponent } from './findallutilisateur/findallutilisateur.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [
    InscriptionComponent,
    FindallutilisateurComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    UsersRoutingModule,
    FormsModule

  ]
})
export class UsersModule { }
