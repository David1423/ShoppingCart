import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Signup } from '../models/object.model';
import { ShipperService } from '../services/shipper.service';

@Component({
  selector: 'app-shipper-login',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterLink, ReactiveFormsModule],
  templateUrl: './shipper-login.component.html',
  styleUrl: './shipper-login.component.css'
})
export class ShipperLoginComponent implements OnInit{

  shipperForm!: FormGroup;
  loginError: String=''

  constructor(private shipperService : ShipperService, private router: Router,private formBuilder: FormBuilder){

  }

  ngOnInit(): void {
   this.shipperService.reloadSeller();

   this.shipperForm = this.formBuilder.group({
    password: ['', [Validators.required, Validators.minLength(6)]],
    email: ['', [Validators.required, Validators.email]],

  })
  }

  login(data:Signup):void{
    this.shipperService.userLogin(data);
    this.shipperService.isLoginError.subscribe((isError)=>{
      if(isError){
        this.loginError="Email or password is not correct";
      }
    })

  }

  openSignup(){
    this.router.navigate(['shipper-signup'])
  }

}
