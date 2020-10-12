import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainStoreComponentComponent } from './main-store-component.component';

describe('MainStoreComponentComponent', () => {
  let component: MainStoreComponentComponent;
  let fixture: ComponentFixture<MainStoreComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainStoreComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainStoreComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
