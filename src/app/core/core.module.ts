import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ResearchBarComponent } from './research-bar/research-bar.component';
import { DatepickerComponent } from './datepicker/datepicker.component';

import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    ResearchBarComponent,
    DatepickerComponent
  ],
  imports: [
    CommonModule,
    CoreRoutingModule,
    MatDatepickerModule,
    MatInputModule,
    MatFormFieldModule,
    MatNativeDateModule,
    FormsModule,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    ResearchBarComponent,
    DatepickerComponent
  ]
})
export class CoreModule { }
