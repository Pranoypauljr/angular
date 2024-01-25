import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
@Injectable()
export class BookHelperService {
  public bookSummary:Array<{id:string,summary:string}>=[{id:"PRISONER OF AZKABAN",summary:"book is ok"},{id:"TOLSTOY LIFE",summary:"never mind"},{id:"FIRE",summary:"not bad"},{id:"BALARAM",summary:"very bad"},{id:"JINX BOOK",summary:"good book"},{id:"NEVER BACK DOWN",summary:"jinx book"}];

  constructor() { }
  public UpperCaseBooks(books:Array<string>):Array<string>{
    return books.map(book=>book.toUpperCase());
  }
  
  
}
