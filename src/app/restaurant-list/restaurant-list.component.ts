import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { DataService } from '../restaurant-list/restaurant.service';
import { IRestaurants } from '../restaurant-list/restaurants';

@Component({
  selector: 'app-restaurant-list',
  templateUrl: './restaurant-list.component.html',
  styleUrls: ['./restaurant-list.component.css']
})
export class RestaurantListComponent implements OnInit, OnChanges {

  public restaurants: IRestaurants[];
  public filteredRestaurants : IRestaurants[];
  public getLatitude: number;
  public getLongitude: number;
  @Input() _filterString: string;
  
  ngOnChanges(): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    if(this.filteredRestaurants !== undefined){
      for (let restaurant of this.restaurants){
        if(restaurant.resturantName === undefined){
          restaurant.resturantName = "No Name";
          restaurant.coordinates = 0;
        }
     }
      this.filteredRestaurants = this._filterString ? this.performFilter(this._filterString) : this.restaurants;
    }

    console.log(this._filterString);
  }
  constructor(private _dataService: DataService) {  }
  ngOnInit() {
    this.getLocation();
    this._dataService.getProducts().subscribe(
      restaurants =>{
        this.restaurants = restaurants;
        this.filteredRestaurants = this.restaurants;        
      }
      ); 
  }
  a_km: number;
  dis_km: number;
  a_mi: number;
  dis_mi: number;

  public calculateDistance_km(lat1: number, lat2: number, long1: number, long2: number): number {
    this.a_km = 0.5 - Math.cos((lat1 - lat2) * 0.017453292519943295) / 2 + Math.cos(lat2 * 0.017453292519943295) * Math.cos((lat1) * 0.017453292519943295) * (1 - Math.cos(((long1 - long2) * 0.017453292519943295))) / 2;
    this.dis_km = (12742 * Math.asin(Math.sqrt(this.a_km))); // 2 * R; R = 6371 km
    return Math.round(this.dis_km);
  }
  public calculateDistance_mi(lat1: number, lat2: number, long1: number, long2: number): number {
    this.a_mi = 0.5 - Math.cos((lat1 - lat2) * 0.017453292519943295) / 2 + Math.cos(lat2 * 0.017453292519943295) * Math.cos((lat1) * 0.017453292519943295) * (1 - Math.cos(((long1 - long2) * 0.017453292519943295))) / 2;
    this.dis_mi = (12742 * Math.asin(Math.sqrt(this.a_mi))); // 2 * R; R = 6371 km
    return Math.round(this.dis_mi * 0.621371); //Multiply by 0.621371 to convert into miles
  }

  getLocation(): void {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((pos) => this.showPosition(pos));
    } else {
      console.log("browser does not support geolocation");
    }
  }

  showPosition(position) {
    this.getLatitude = position.coords.latitude;
    this.getLongitude = position.coords.longitude;
  }

  addToFavourites($event){
    console.log("clicked");
  }

  performFilter(filterBy: string): IRestaurants[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.restaurants.filter((restaurant: IRestaurants) =>
    restaurant.resturantName.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }
}
