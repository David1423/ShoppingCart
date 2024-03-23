import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AdminHeaderComponent } from "../admin-header/admin-header.component";
import { Signup } from '../../models/object.model';
import { AdminService } from '../services/admin.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule, FormsModule, AdminHeaderComponent],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent implements OnInit {
  
  users: Signup[] = [];
  username:any;
  
  constructor(private adminService: AdminService) {}

  ngOnInit(): void {
    this.adminService.getUsers().subscribe((response)=>{
      this.users = response;
    })
  }
  Search(){
    if(this.username == ""){
      this.ngOnInit();
    }else{
      this.users = this.users.filter(response=>{
        return response.username.toLocaleLowerCase().match(this.username.toLocaleLowerCase());
      })
    }
  }
  
}