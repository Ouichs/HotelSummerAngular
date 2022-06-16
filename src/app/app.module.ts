import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from './core/core.module';
import { PagesModule } from './pages/pages.module';
import { UsersModule } from './users/users.module';
import { FacturationModule } from './facturation/facturation.module';




@NgModule({
  declarations: [
    AppComponent,



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    UsersModule,
    CoreModule,
    PagesModule,
    FacturationModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
