import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookProductsComponent } from './book-products.component';

describe('BookProductsComponent', () => {
  let component: BookProductsComponent;
  let fixture: ComponentFixture<BookProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookProductsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BookProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
