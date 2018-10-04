import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RestaurantListComponent } from './restaurant-list/restaurant-list.component';
import { DataService } from './restaurant-list/restaurant.service';
import { FooterComponent } from './footer/footer.component';
import { CurrentLocationComponent } from './current-location/current-location.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RestaurantListComponent,
    FooterComponent,
    CurrentLocationComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
