import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { ShoppingReducer } from './store/reducers/shopping-reducer';
import{ FormsModule } from '@angular/forms'
import { counterReducer } from './store/reducers/counter.reducer';
import { addProductReducer } from './store/reducers/product.reducers';
import { ProductComponent } from './product/product.component';
import { AppRoutingModule } from './app-routing.module';
import { ProductListComponent } from './product-list/product-list.component';
import { ShoppingListItemsComponent } from './shopping-list-items/shopping-list-items.component';
import { IncrementDecrementComponent } from './increment-decrement/increment-decrement.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ProductListComponent,
    ShoppingListItemsComponent,
    IncrementDecrementComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    StoreModule.forRoot({
      shopping: ShoppingReducer,
      count: counterReducer,
      product: addProductReducer
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
