import {Component, EventEmitter,  Input, OnInit, Output} from '@angular/core';
import {Autocomplete} from "../../interfaces/autocomplete.interface";

@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.scss']
})
export class AutocompleteComponent implements OnInit {

  @Input() public data: Autocomplete[] = [];
  @Output() selectEvent = new EventEmitter();

  public searchArr: Autocomplete[]=[];
  public searchStr: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  public search() {
    if(this.searchStr.length >= 2) {
      this.searchArr = this.data.filter((item: Autocomplete) => item.name.toLowerCase().indexOf(this.searchStr.toLowerCase()) === 0)
    }
  }

  public choose(item: Autocomplete) {
    this.searchArr = [];
    this.searchStr = item.name
    this.selectEvent.emit(item);
  }
}

