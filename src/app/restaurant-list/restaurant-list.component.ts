import { Component, OnInit } from '@angular/core';
import { DataService } from '../restaurant-list/restaurant.service';
import { IRestaurants } from '../restaurant-list/restaurants';

@Component({
  selector: 'app-restaurant-list',
  templateUrl: './restaurant-list.component.html',
  styleUrls: ['./restaurant-list.component.css']
})
export class RestaurantListComponent implements OnInit {

  public restaurants: IRestaurants[];
  constructor(private _dataService: DataService) { }

  ngOnInit() {
    this._dataService.getProducts()
      .subscribe(restaurants => this.restaurants = restaurants);
  }
  a_km: number;
  dis_km: number;
  a_mi: number;
  dis_mi: number;

  public calculateDistance_km (lat1:number,lat2:number,long1:number,long2:number): number {
    this.a_km = 0.5 - Math.cos((lat1-lat2) * 0.017453292519943295) / 2 + Math.cos(lat2 * 0.017453292519943295) *Math.cos((lat1) * 0.017453292519943295) * (1 - Math.cos(((long1- long2) * 0.017453292519943295))) / 2;
    this.dis_km = (12742 * Math.asin(Math.sqrt(this.a_km))); // 2 * R; R = 6371 km
    return this.dis_km; 
  } 
  public calculateDistance_mi (lat1:number,lat2:number,long1:number,long2:number): number {
    this.a_mi = 0.5 - Math.cos((lat1-lat2) * 0.017453292519943295) / 2 + Math.cos(lat2 * 0.017453292519943295) *Math.cos((lat1) * 0.017453292519943295) * (1 - Math.cos(((long1- long2) * 0.017453292519943295))) / 2;
    this.dis_mi = (12742 * Math.asin(Math.sqrt(this.a_mi))); // 2 * R; R = 6371 km
    return this.dis_mi*0.621371; //Multiply by 0.621371 to convert into miles
  } 
}
