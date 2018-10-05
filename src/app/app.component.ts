import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  _filterString : string;
  ngOnInit(): void {
    
  }
  gFilterString(value: string) :void{
    this._filterString = value;
  }

}
