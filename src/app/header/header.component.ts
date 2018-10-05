import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }
  @Output() sendFilterString: EventEmitter<string> = new EventEmitter<string>();
  _filterString: string = 'me';

  get filterString(): string{
    return this._filterString;
  }
  set filterString(value: string){
    this._filterString = value;

    if(this.filterString){
      this.sendFilterString.emit(this.filterString);
      // console.log(this.filterString);
    }
  }


  ngOnInit() {
    
  }

  // ngOnChanges(): void {
  //   //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
  //   //Add '${implements OnChanges}' to the class.
    
  //   this.sendFilterString.emit(this.filterString);
  // }

}
