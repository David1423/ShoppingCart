import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ShipperService } from '../services/shipper.service';
import { Signup } from '../models/object.model';

@Component({
  selector: 'app-shipper-signup',
  standalone: true,
  imports: [FormsModule,CommonModule, RouterLink, ReactiveFormsModule],
  templateUrl: './shipper-signup.component.html',
  styleUrl: './shipper-signup.component.css'
})
export class ShipperSignupComponent implements OnInit {

  shipperForm!: FormGroup;
  loginError: string = '';

  constructor(private shipperService: ShipperService, private formBuilder: FormBuilder, private router: Router) {

  }
  ngOnInit(): void {
    this.shipperService.reloadSeller();

    this.shipperForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.minLength(4)]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      email: ['', [Validators.required, Validators.email]],
      houseno: ['', Validators.required],
      area: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      pincode: ['', Validators.required],
      mobileNumber: ['', Validators.required],
    })
  }
  signUp(data: Signup): void {
    console.warn(data);
    this.shipperService.userSignup(data);
  }

  openLogin() {
    this.router.navigate(['shipper-login'])
  }
}
