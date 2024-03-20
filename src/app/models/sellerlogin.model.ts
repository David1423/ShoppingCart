export class Signup{
    username! : string;
    password! : string;
    email! : string;
    address!: string;
    mobileNumber!: string;
    id: any;

}

export class Login{
    email!: string;
    password!: string;
}

export class Products{
    productName!:string;
    productPrice!:number;
    productCategory!:string;
    productDescription!:string;
    productImage!:string;
    id!:number;
    quantity: undefined|number;
    productId:undefined|number;
}
export class Cart{
    productName!:string;
    productPrice!:number;
    productCategory!:string;
    productDescription!:string;
    productImage!:string;
    id:number | undefined;
    quantity: undefined|number;
    productId!:number;
    userId!:number;
}

export class priceSummary{
    productPrice!:number;
    discount!:number;
    tax!:number;
    delivery!:number;
    total!:number;

}

export class Order{
    email!: string;
    address!: string;
    contact!: string;
    totalPrice!: number;
    userId!: string;
    id:number|undefined;
}

export class CartItem {
    productId!: number;
    quantity!: number;
    // Include other relevant details if needed (e.g., selected size, color)
  }