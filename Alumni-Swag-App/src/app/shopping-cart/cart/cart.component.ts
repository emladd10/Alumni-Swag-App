import { Component, OnInit } from '@angular/core';
import { MessengerService} from 'src/app/services/messenger.service'
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

cartItem = []

  constructor(private msg: MessengerService) { }

  ngOnInit(){
    this.msg.getMsg().subscribe((product: Product) =>{
      this.addProductToCart(product)
    })
  }

  addProductToCart(product: Product){

    let productExists = false

for(let i in this.cartItem){
        if(this.cartItem[i].productId === product.id){
          this.cartItem[i].qty++
          productExists = true
          break;
        }
      }

    if(!productExists){
      this.cartItem.push({
        productId: product.id,
        productName: product.name,
        qty: 1,
      })
    }
    
  }
}
