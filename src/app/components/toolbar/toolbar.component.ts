import { Component, OnInit } from '@angular/core';
import {Store} from "@ngrx/store";
import {listItemLengthSelector} from "../../state/list.selectors";

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  constructor(private store: Store) { }

  listItemLength$ = this.store.select(listItemLengthSelector);

  ngOnInit(): void {
  }

}
