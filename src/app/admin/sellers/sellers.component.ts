import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AdminService } from '../services/admin.service';
import { Signup } from '../../models/sellerlogin.model';

@Component({
  selector: 'app-sellers',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sellers.component.html',
  styleUrl: './sellers.component.css'
})
export class SellersComponent implements OnInit {

  sellers: Signup[] = [];

  constructor(private adminService: AdminService) {}

  ngOnInit(): void {
    this.adminService.getSellers().subscribe((response)=>{
      this.sellers = response;
    })
  }
}
