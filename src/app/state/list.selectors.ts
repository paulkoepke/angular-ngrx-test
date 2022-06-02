import {createSelector} from "@ngrx/store";
import {allSelector} from "./index";
import {ReducerListState} from "./list.reducer";
import {ListItem} from "../models/list-item.model";

export const listItemSelector = createSelector(
  allSelector,
  (listState: ReducerListState) => listState.items);

export const listItemLengthSelector = createSelector(
  listItemSelector,
  (items: ListItem[]) => items.length);
