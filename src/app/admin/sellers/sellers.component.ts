import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AdminService } from '../services/admin.service';
import { Signup } from '../../models/object.model';
import { FormsModule } from '@angular/forms';
import { AdminHeaderComponent } from '../admin-header/admin-header.component';

@Component({
  selector: 'app-sellers',
  standalone: true,
  imports: [CommonModule, FormsModule, AdminHeaderComponent],
  templateUrl: './sellers.component.html',
  styleUrl: './sellers.component.css'
})
export class SellersComponent implements OnInit {

  sellers: Signup[] = [];
  username: any;

  constructor(private adminService: AdminService) {}

  ngOnInit(): void {
    this.adminService.getSellers().subscribe((response)=>{
      this.sellers = response;
    })
  }
  Search(){
    if(this.username == ""){
      this.ngOnInit();
    }else{
      this.sellers = this.sellers.filter(response=>{
        return response.username.toLocaleLowerCase().match(this.username.toLocaleLowerCase());
      })
    }
  }
}
