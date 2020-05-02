import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CatalogComponent } from './catalog/catalog.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { HomeComponent } from './home/home.component';
import { CustomComponent } from './custom/custom.component';



const routes: Routes = [
  {path: 'catalog', component: CatalogComponent},
  {path: 'shopping-cart', component: ShoppingCartComponent},
  {path: 'home', component: HomeComponent},
  {path: 'custom', component: CustomComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [CatalogComponent, ShoppingCartComponent, HomeComponent, CustomComponent]
