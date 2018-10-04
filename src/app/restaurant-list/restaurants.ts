import { Time } from "@angular/common";

export interface IRestaurants {
    resturantName: string;
    website: string;
    email: string;
    contactNumber: number;
    contactPerson: string;
    openTime: Time;
    closeTime: Time;
    categories: any[];
    cusine: string;
    coordinates: {};
    distance: string;
    discounts: string;
    currency: string;
    Address: any[];
    isDelivery: boolean;
    isTakeOut: boolean;
    country: string;
    typeOfPlace: string;
    typeOfBusiness: string;
    isDineIn: boolean;
    username: string;
    id: string;
}
//22 items

