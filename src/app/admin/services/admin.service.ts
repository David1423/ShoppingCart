import { Injectable } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Order, Products, Signup } from '../../models/object.model';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  user_url:string = 'http://localhost:3000/users/';
  seller_url:string = 'http://localhost:3000/seller/';
  product_url:string = "http://localhost:3000/products/";
  order_url:string = "http://localhost:3000/orders"
  
  constructor(private http:HttpClient) { }


  getUsers(){
    return this.http.get<Signup[]>(this.user_url);
  }

  getSellers(){
    return this.http.get<Signup[]>(this.seller_url);
  }

  getProducts(){
    return this.http.get<Products[]>(this.product_url);
  }

  getOrders(){
    return this.http.get<Order[]>(this.order_url);
  }

}
