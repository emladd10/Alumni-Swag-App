import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CatalogComponent } from './catalog/catalog.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { Routes } from '@angular/router';

const routes: Routes = [
  {path: 'catalog', component: CatalogComponent},
  {path: 'shopping-cart', component: ShoppingCartComponent},
  {path: '', redirectTo: '/catalog', pathMatch:'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    CatalogComponent,
    ShoppingCartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
