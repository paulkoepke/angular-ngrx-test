import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Store} from "@ngrx/store";
import {ListItem} from "../../models/list-item.model";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  @Input()
  listItems: ListItem[] | undefined | null;

  @Output()
  removeEvent: EventEmitter<number> = new EventEmitter<number>();

  constructor(private store: Store) { }


  ngOnInit(): void {

  }

  removeItem(i: number) {
    this.removeEvent.emit(i);
  }
}
