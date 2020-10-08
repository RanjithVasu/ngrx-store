import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../store/models/product.model';
import { Store } from '@ngrx/store';
import { AppState } from '../store/models/app-state.mode';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  products: Observable<Product[]>;

  constructor(private store: Store<AppState>) {
    this.products = this.store.select((state) => state.product);
  }

  // addProduct(name, price) {
  //   this.store.dispatch({
  //     type: 'ADD_PRODUCT',
  //     payload: <Product>{
  //       name: name,
  //       price: price,
  //     },
  //   });
  // }

  ngOnInit(): void {}

  onSubmit(form: NgForm) {
    this.store.dispatch({
      type: 'ADD_PRODUCT',
      payload: <Product>{
        name: form.value.name,
        price: form.value.price,
      },
    });
    form.reset();
}

}
