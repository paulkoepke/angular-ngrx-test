import {Component, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {addListItem} from "../../state/list.actions";
import {Observable} from "rxjs";
import {allSelector} from "../../state";
import {ReducerListState} from "../../state/list.reducer";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  constructor(private store: Store) { }

  allState: Observable<ReducerListState> = this.store.select(allSelector);
  title: string = "aa";
  text: string = "aa";

  ngOnInit(): void {
    this.allState.subscribe(listState => {
      console.log(listState);
    })
  }

  handleButtonClick(){
    this.store.dispatch(addListItem({listItem: {title: this.title, text: this.text}}))
  }
}
