import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Autocomplete} from "../../interfaces/autocomplete.interface";

@Component({
  selector: 'app-select-box',
  templateUrl: './select-box.component.html',
  styleUrls: ['./select-box.component.scss']
})
export class SelectBoxComponent implements OnInit {

  @Input() public data: Autocomplete[] = [];
  @Output() selectEvent = new EventEmitter();

  public state = false;
  public selected: Autocomplete = null;

  constructor() { }

  ngOnInit(): void {
    this.choose(this.data[0])
  }

  public toggle(state?: boolean) {

    this.state = state !== undefined ? state : !this.state;

  }

  public choose(item:Autocomplete) {
    this.selected = item;
    this.selectEvent.emit(this.selected);
    this.toggle(false);
  }
}
