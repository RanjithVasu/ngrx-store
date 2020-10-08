import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../store/models/product.model';
import { Store } from '@ngrx/store';
import { AppState } from '../store/models/app-state.mode';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  products: Observable<Product[]>;

  constructor(private store: Store<AppState>) {
    this.products = this.store.select(state => state.product);
  }

  ngOnInit(): void {
  }

}
