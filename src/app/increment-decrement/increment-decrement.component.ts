import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { increment, decrement, reset } from '../store/actions/counter.actions';
import { AppState } from '../store/models/app-state.mode';

@Component({
  selector: 'app-increment-decrement',
  templateUrl: './increment-decrement.component.html',
  styleUrls: ['./increment-decrement.component.scss']
})
export class IncrementDecrementComponent implements OnInit {

  count$: Observable<number>

  constructor(private store: Store<AppState>,
     private stores: Store<{ count: number }>) {
    this.count$ = stores.select('count');
   }

  ngOnInit(): void {
  }

  increment() {
    // TODO: Dispatch an increment action
    this.store.dispatch(increment());
  }

  decrement() {
    // TODO: Dispatch a decrement action
    this.store.dispatch(decrement());
  }

  reset() {
    // TODO: Dispatch a reset action
    this.store.dispatch(reset());
  }
}
