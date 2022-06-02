import {ListItem} from "../models/list-item.model";
import {createReducer, on} from "@ngrx/store";
import {addListItem, removeListItem} from "./list.actions";


export interface ReducerListState {
  items: ListItem[];
  test?: string;
}

export const initialState: ReducerListState = {
  items: [],
  test: "test"
};

export const listItemReducer = createReducer(
  initialState,
  on(addListItem, (state, {listItem}) => {
    return {...state, items: [...state.items, listItem]}
  }),
  on(removeListItem, (state, {index}) => {
    const array = [...state.items];
    array.splice(index, 1);
    return {items: array};
  })
)


