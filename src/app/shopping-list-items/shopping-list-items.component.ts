import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ShoppingItem } from '../store/models/shopping-item.model';
import { Store } from '@ngrx/store';
import { AppState } from '../store/models/app-state.mode';
import { AddItemAction, DeleteItemAction } from '../store/actions/shopping-actions';
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'app-shopping-list-items',
  templateUrl: './shopping-list-items.component.html',
  styleUrls: ['./shopping-list-items.component.scss']
})
export class ShoppingListItemsComponent implements OnInit {

  shoppingItems: Observable<Array<ShoppingItem>>;
  newShoppingItem: ShoppingItem = { id: '', name: '' }

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {

    this.shoppingItems = this.store.select(store => store.shopping);
  }

  addItem() {
    this.newShoppingItem.id = uuid();

    this.store.dispatch(new AddItemAction(this.newShoppingItem));

    this.newShoppingItem = { id: '', name: '' };
  }

  deleteItem(id: string) {
    this.store.dispatch(new DeleteItemAction(id));
  }

}
