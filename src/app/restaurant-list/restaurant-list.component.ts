import { Component, OnInit } from '@angular/core';
import { DataService } from '../restaurant-list/restaurant.service';
import { IRestaurants } from '../restaurant-list/restaurants';

@Component({
  selector: 'app-restaurant-list',
  templateUrl: './restaurant-list.component.html',
  styleUrls: ['./restaurant-list.component.css']
})
export class RestaurantListComponent implements OnInit {

  restaurants: IRestaurants[];
  constructor(private _dataService: DataService) { }

  ngOnInit() {
    this._dataService.getProducts()
      .subscribe(restaurants => this.restaurants = restaurants);
  }
}
