import { Component, OnInit } from '@angular/core';
import { Order } from '../../models/object.model';
import { AdminService } from '../services/admin.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AdminHeaderComponent } from '../admin-header/admin-header.component';
import { SearchComponent } from '../../search/search.component';

@Component({
  selector: 'app-orders',
  standalone: true,
  imports: [CommonModule,FormsModule,AdminHeaderComponent, SearchComponent],
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.css'
})
export class OrdersComponent implements OnInit {

  orders: Order[] = [];
  userId:any;

  constructor(private adminService: AdminService) { }

  ngOnInit(): void {
      this.adminService.getOrders().subscribe((response) => {
          this.orders = response;
      })
  }

  Search(){
      if(this.userId == ""){
        this.ngOnInit();
      }else{
        this.orders = this.orders.filter(response=>{
          return response.userId.toLocaleLowerCase().match(this.userId.toLocaleLowerCase());
        })
      }
    }
}