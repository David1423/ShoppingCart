import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../services/product.service';
import { Cart, Order } from '../models/sellerlogin.model';
import { Router } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [FormsModule, FontAwesomeModule, CommonModule],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css'
})
export class CheckoutComponent implements OnInit{

  totalPrice:number|undefined;
  cartData:Cart[]|undefined;
  orderMessage:string|undefined;

  constructor(private productService : ProductService, private router : Router){

  }

  ngOnInit(): void {
    this.productService.currentCart().subscribe((result)=>{
      let productPrice=0;
      this.cartData=result;
      result.forEach((item)=>{
        if(item.quantity){
          productPrice = productPrice+ (+item.productPrice* +item.quantity)
        }       
      })
      this.totalPrice= productPrice+(productPrice/10)+100-(productPrice/10);

      console.warn(this.totalPrice);
    })
    
  }
  orderNow(data:{email:string,address:string,contact:string}){
    let user = localStorage.getItem('user');
    let userId = user && JSON.parse(user).id;
    if(this.totalPrice){
      let orderData:Order = {
        ...data,
        totalPrice: this.totalPrice,
        userId,
        id:undefined
      }
      this.cartData?.forEach((item)=>{
        setTimeout(()=>{
          item.id && this.productService.deleteCartItems(item.id);
        },700)
      })
      this.productService.orderNow(orderData).subscribe((result)=>{
        if(result){
          this.orderMessage="Order is Placed"
          alert("Your order is placed...!")
          setTimeout(()=>{
            this.orderMessage=undefined;
            this.router.navigate(['/my-orders']);
          },1000)
        }
      })
    }
    
  }

}
