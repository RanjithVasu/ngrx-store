import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { ProductListComponent } from './product-list/product-list.component';
import { IncrementDecrementComponent } from './increment-decrement/increment-decrement.component';
import { ShoppingListItemsComponent } from './shopping-list-items/shopping-list-items.component';

//This is my case
const routes: Routes = [
  {
    path: '',
    component: ProductComponent,
  },
  {
    path: 'product',
    component: ProductComponent,
  },
  {
    path: 'productlist',
    component: ProductListComponent,
  },
  {
    path: 'shoppinglist',
    component: ShoppingListItemsComponent,
  },
  {
    path: 'incdec',
    component: IncrementDecrementComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
