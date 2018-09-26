import { Injectable } from '@angular/core';
import { IRestaurants } from '../restaurant-list/restaurants';
import { HttpClient } from '@angular/common/http';
import { Observable } from '../../../node_modules/rxjs';

@Injectable({
    providedIn: 'root'
})
export class DataService {
    private _productUrl = 'http://35.154.171.69:2020/api/resturants';

    //http://35.154.171.69:2020/api/resturants

    constructor(private _http: HttpClient) { }

    getProducts(): Observable<IRestaurants[]> {
        return this._http.get<IRestaurants[]>(this._productUrl);
    }
}