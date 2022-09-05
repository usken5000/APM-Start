import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ProductList } from './product/product-list.component'
import { Comment } from '@angular/compiler';

@NgModule({
  declarations: [
    AppComponent,
    ProductList
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  bootstrap: [AppComponent]
  
})
export class AppModule { }
