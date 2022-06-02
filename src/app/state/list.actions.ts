import { createAction, props } from '@ngrx/store';
import {ListItem} from "../models/list-item.model";

export const addListItem = createAction(
  '[List] Add ListItem',
  props<{ listItem: ListItem }>()
);

export const removeListItem = createAction(
  '[List] Remove ListItem',
  props<{ index: number }>()
);
