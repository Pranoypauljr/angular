import { Component } from '@angular/core';
import { BookHelperService } from '../book-helper.service';

@Component({
  selector: 'app-book-products',
  // standalone: true,//it is a component
  // imports: [],
  templateUrl: './book-products.component.html',
  styleUrl: './book-products.component.scss'
})
export class BookProductsComponent {
    public bookReview:string="Welcome to the mystical world of magic !!!!";
    constructor(private readonly bookHelperService: BookHelperService){}
    public ngOnInit(): void {
      const bookReview = [this.bookReview];
      this.bookReview = this.bookHelperService.UpperCaseBooks(bookReview)[0];
    }
    public showReview(index: number){

    }
}
