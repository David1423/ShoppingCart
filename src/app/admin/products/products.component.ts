import { Component, OnInit } from '@angular/core';
import { Products } from '../../models/object.model';
import { AdminService } from '../services/admin.service';
import { CommonModule } from '@angular/common';
import { AdminHeaderComponent } from '../admin-header/admin-header.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, AdminHeaderComponent,FormsModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {

  products: Products[] = [];
  productName : any;

  constructor(private adminService: AdminService) {}

  ngOnInit(): void {
    this.adminService.getProducts().subscribe((response)=>{
      this.products = response;
    })
  }
  Search(){
    if(this.productName == ""){
      this.ngOnInit();
    }else{
      this.products = this.products.filter(response=>{
        return response.productName.toLocaleLowerCase().match(this.productName.toLocaleLowerCase());
      })
    }
  }
}
