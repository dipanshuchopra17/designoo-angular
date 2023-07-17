import { Component, ElementRef, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-photographer-login',
  templateUrl: './photographer-login.component.html',
  styleUrls: ['./photographer-login.component.scss']
})
export class PhotographerLoginComponent implements OnInit {
  isFormDisabled: boolean = true;
  form = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  })
  showPassword = false;
  constructor(private router: Router, private elementRef: ElementRef) { }

  ngOnInit(): void {
  }
  signUp() {
    this.router.navigateByUrl('/user_type');
  }
  signIn() {

  }
  togglePassword() {
   this.showPassword = !this.showPassword;
   let input = this.elementRef.nativeElement.querySelector('#passwordInput');
   if(input.type == 'password')
   input.type = 'text';
   else
   input.type='password';
  }

}
