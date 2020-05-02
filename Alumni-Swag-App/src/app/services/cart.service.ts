import { Injectable } from '@angular/core';
import { CartItem } from '../models/cart-item';
import { Observable } from 'rxjs';
import { HttpClient} from '@angular/common/http';
import { cartUrl } from '../config/api';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http: HttpClient) { }

  getCartItem(): Observable<CartItem[]>{
    return this.http.get<CartItem[]>(cartUrl);
  }

  addPrductToCart(product: Product): Observable<any>{
    return this.http.post(cartUrl, {product});
  }
}
