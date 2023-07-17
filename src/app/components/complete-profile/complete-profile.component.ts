import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-complete-profile',
  templateUrl: './complete-profile.component.html',
  styleUrls: ['./complete-profile.component.scss']
})
export class CompleteProfileComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  completeProfile() {
    // let formArr =[];
    // for (let key in this.fg.value) {
      // formArr.push('FIELDS[' + key + ']=' + this.fg.value[key])
    // }
    // for (let key in this.data) {
      // formArr.push('FIELDS[' + key + ']=' + this.data[key])
    // }
    let queryParam = ''
    // formArr.join('&')

    this.http.get('https://designoo.bitrix24.in/rest/7/oqndladhp6ngof5k/crm.lead.update.json?'+queryParam).subscribe(res => {
      console.log(res)
      alert('Registered successfully.')
    })

    console.log(queryParam)

  }

}
