import {ReducerListState} from "./list.reducer";
import {createFeatureSelector} from "@ngrx/store";

export const featureStateName = 'listFeature';


export const allSelector = createFeatureSelector<ReducerListState>(featureStateName);

