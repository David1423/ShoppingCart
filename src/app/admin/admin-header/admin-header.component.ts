import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-header',
  standalone: true,
  imports: [],
  templateUrl: './admin-header.component.html',
  styleUrl: './admin-header.component.css'
})
export class AdminHeaderComponent implements OnInit {
  
  adminName: string = "";

  constructor(private router: Router) {

  }
  ngOnInit(): void {
  }
}
