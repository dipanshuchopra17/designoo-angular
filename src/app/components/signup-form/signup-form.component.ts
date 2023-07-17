import { Component, ElementRef, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.scss']
})
export class SignupFormComponent implements OnInit {
  signupForm = new FormGroup({
    fname: new FormControl('', Validators.required),
    lname: new FormControl('', Validators.required),
    companyname: new FormControl(''),
    email: new FormControl('', Validators.required),
    countrycode: new FormControl(''),
    number: new FormControl('')
  })
  constructor(private elementRef: ElementRef) {

   }

  ngOnInit(): void {
  }
  submitForm(){
    this.elementRef.nativeElement.querySelector('.overlay').style.display='flex';
  }
  closePopup(){
    this.elementRef.nativeElement.querySelector('.overlay').style.display='none';
  }

}
