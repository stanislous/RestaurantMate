import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor() { }
  @Output() sendFilterString: EventEmitter<string> = new EventEmitter<string>();
  _filterString: string;

  get filterString(): string{
    return this._filterString;
  }
  set filterString(value: string){
    this._filterString = value;

    if((this.filterString) || (this.filterString === "") ){
      this.sendFilterString.emit(this.filterString);
    }
  }

}
