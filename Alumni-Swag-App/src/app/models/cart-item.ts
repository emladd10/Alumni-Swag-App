import { Product } from './product';

export class CartItem {
    id: number;
    productId: number;
    producttitle: string;
    qty: number;

    constructor(id: number, product: Product, qty = 1) {
        this.id = id;
        this.productId = product.id;
        this.producttitle = product.name;
        this.qty = qty;
    }
}
