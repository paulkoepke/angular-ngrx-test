import {Component} from '@angular/core';
import {Observable} from "rxjs";
import {Store} from "@ngrx/store";
import {listItemSelector} from "./state/list.selectors";
import {ListItem} from "./models/list-item.model";
import * as ListItemActions from "./state/list.actions";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  listItems$: Observable<ListItem[]> = this.store.select(listItemSelector);

  constructor(private store: Store){}

  removeItem($event: number) {
    this.store.dispatch(ListItemActions.removeListItem({index: $event}));
  }
}
