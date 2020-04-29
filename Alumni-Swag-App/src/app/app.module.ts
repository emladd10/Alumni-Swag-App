import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponents } from './app-routing.module';

import { AppComponent } from './app.component';
import { FilterComponent } from './shopping-cart/filter/filter.component';
import { ProductListComponent } from './shopping-cart/product-list/product-list.component';
import { CartComponent } from './shopping-cart/cart/cart.component';
import { CartItemComponent } from './shopping-cart/cart/cart-item/cart-item.component';



@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    FilterComponent,
    ProductListComponent,
    CartComponent,
    CartItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
