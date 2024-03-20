import { Injectable } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Signup } from '../../models/sellerlogin.model';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  user_url:string = 'http://localhost:3000/users/';
  seller_url:string = 'http://localhost:3000/seller/';
  // public product_url = "http://localhost:3000/products/";
  // public all_user = "http://localhost:3000/users"
  
  constructor(private http:HttpClient) { }


  getUsers(){
    return this.http.get<Signup[]>(this.user_url);
  }

  getSellers(){
    return this.http.get<Signup[]>(this.seller_url);
  }
}
