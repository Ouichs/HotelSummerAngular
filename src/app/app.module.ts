import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { UsersModule } from './users/users.module';
import { DatepickerComponent } from './datepicker/datepicker.component';
import { FiltersComponent } from './filters/filters.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { HotelsComponent } from './pages/hotels/hotels.component';
import { ListHotelsComponent } from './list-hotels/list-hotels.component';
import { ResearchBarComponent } from './research-bar/research-bar.component';



@NgModule({
  declarations: [
    AppComponent,
    ResearchBarComponent,
    HeaderComponent,
    HomeComponent,
    DatepickerComponent,
    FooterComponent,
    ListHotelsComponent,
    FiltersComponent,
    HotelsComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    UsersModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
