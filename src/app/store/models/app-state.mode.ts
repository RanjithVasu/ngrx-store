import { ShoppingItem } from './shopping-item.model';
import { Product } from './product.model';

export interface AppState {
  readonly shopping: Array<ShoppingItem>;
  readonly product: Product[];
}
