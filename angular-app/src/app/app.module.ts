import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { BookRetailComponent } from './book-retail/book-retail.component';
import { BookProductsComponent } from './book-products/book-products.component';
import { BookHelperService } from './book-helper.service';



@NgModule({
  declarations: [//we put components to let know that it is part of this module.
    AppComponent,
    BookProductsComponent
  ],
  imports: [//we put modules here
    CommonModule,
    BrowserModule,
    BookRetailComponent,
  ],
  bootstrap:[
    AppComponent
  ],
  providers:[
    BookHelperService
  ]
})
export class AppModule { }
