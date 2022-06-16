import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart/cart.component';
import { CommandeComponent } from './commande/commande.component';



@NgModule({
  declarations: [
    CartComponent,
    CommandeComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CartComponent,
    CommandeComponent
  ]
})
export class FacturationModule { }
