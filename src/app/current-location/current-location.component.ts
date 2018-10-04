import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-current-location',
  templateUrl: './current-location.component.html',
  styleUrls: ['./current-location.component.css']
})
export class CurrentLocationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  // findMe() {
  //   if (navigator.geolocation) {
  //     navigator.geolocation.getCurrentPosition((position) => {
  //       this.showPosition(position);
  //     });
  //   } else {
  //     alert("Geolocation is not supported by this browser.");
  //   }
  // }

  // trackMe() {
  //   if (navigator.geolocation) {
  //     // this.isTracking = true;
  //     navigator.geolocation.watchPosition((position) => {
  //       this.showTrackingPosition(position);
  //     });
  //   } else {
  //     alert("Geolocation is not supported by this browser.");
  //   }
  // }

  // currentLat: number;
  // currentLong: number;

  // showPosition(position) {
  //   this.currentLat = position.coords.latitude;
  //   this.currentLong = position.coords.longitude;

  //   let location = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
  //   this.map.panTo(location);

  //   if (!this.marker) {
  //     this.marker = new google.maps.Marker({
  //       position: location,
  //       map: this.map,
  //       title: 'Got you!'
  //     });
  //   }
  //   else {
  //     this.marker.setPosition(location);
  //   }
  // }
  
  // showTrackingPosition(position) {
  //   console.log(`tracking postion:  ${position.coords.latitude} - ${position.coords.longitude}`);
  //   this.currentLat = position.coords.latitude;
  //   this.currentLong = position.coords.longitude;

  //   let location = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
  //   this.map.panTo(location);

  //   if (!this.marker) {
  //     this.marker = new google.maps.Marker({
  //       position: location,
  //       map: this.map,
  //       title: 'Got you!'
  //     });
  //   }
  //   else {
  //     this.marker.setPosition(location);
  //   }
  // }

}
