import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-photographer-signup',
  templateUrl: './photographer-signup.component.html',
  styleUrls: ['./photographer-signup.component.scss']
})
export class PhotographerSignupComponent implements OnInit {
  userType: any = '';
  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
  }

  signUp() {
    this.router.navigateByUrl('signup')
  }

  setUserType(type: any) {
    this.userType = type;

  }
  signIn() {

  }
}
