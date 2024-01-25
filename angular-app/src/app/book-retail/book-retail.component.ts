import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BookHelperService } from '../book-helper.service';

@Component({
  selector: 'app-book-retail',
  standalone: true,//if it is there it is module
  imports: [
    CommonModule
  ],
  // providers:[
  //   BookHelperService//fitting services to a module,for now we have specified in app.module so that all child of app can access the service and share variables.
  // ],
  templateUrl: './book-retail.component.html',
  styleUrl: './book-retail.component.scss'
})
export class BookRetailComponent implements OnInit{
    //BookRetailDetails:any=[]
  public bookRetailDetails:any=[];
  public authorBooks:any=[];
  public bookSummary:string|null=null;
  constructor(
    private readonly bookHelperService:BookHelperService
  ){
  }//dependency injection-to use the service
    public ngOnInit(): void {
      this.bookRetailDetails=[{
        name:'JK Rowling',
        books:["Prisoner of Azkaban","Tolstoy Life"]
      },
      {
        name:"Adarsh R",
        books:["Fire","wings of fire"]
      },
      {
        name:"Nevin George",
        books:["Balaram","jinx book"]
      },
      {
        name:"Pranoy S",
        books:["Never back down"]
      }
    ]
    }
    public ShowBooks(index:number):void{
      //this.bookSummary = this.bookHelperService.bookSummary;
      const authorBooks=this.bookRetailDetails[index].books
      this.authorBooks=this.bookHelperService.UpperCaseBooks(authorBooks);
    }
    public GetSummaryByBook(key:string):string{
      console.log(key);
      const book = this.bookHelperService.bookSummary.find((item) => item.id === key);
      console.log(book?.summary)
      return book ? book.summary : 'nothing';
    }
    public ShowBookSummary(id: string): void {
      const summary = this.GetSummaryByBook(id);
      this.bookSummary=summary;
    }
}
