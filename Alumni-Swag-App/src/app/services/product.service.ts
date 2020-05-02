import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from 'src/app/models/product'
import { Observable } from 'rxjs';
import { productsUrl} from 'src/app/config/api';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

products: Product[]= [
  new Product(1, "Long Sleeve Shirt", "100% cotton long sleeve shirt to keep you warm during the winter","https://fanatics.frgimages.com/FFImage/thumb.aspx?i=/productimages/_2513000/altimages/ff_2513210alt2_full.jpg&w=600"),
  new Product(2, "Short Sleeve Shirt", "Short sleeve T-shirt showing off Americas Brightest Orange","https://cdn11.bigcommerce.com/s-4kburhge/images/stencil/1280x1280/products/17042/27990/332017-333__05025.1547581763.jpg?c=2"),
  new Product(3, "OSU Coffe Mug", "All Orange coffee mug with everyones favorite Pistol Pete on the front","https://d3qsmzzpeeacu6.cloudfront.net/all/LXG_CER%20MUG_CER1-ORN-OKSTATE-L1-CLC_1_800x800.jpg"),
  new Product(4, "OSU Sweat Pants", "Grey OSU sweat pants, great for running outdoors","https://www.rallyhouse.com/assets/images/products/14752527-1.jpg"),
  new Product(5, "OSU Koozie", "Keep the beverage of your choice as cold as it can be with the OSU koozie","https://www.rallyhouse.com/assets/images/products/15650272-1.jpg")
]

  constructor() { }

  getProducts(): Product[]{
    return this.products
  }
}


