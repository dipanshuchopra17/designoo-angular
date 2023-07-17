import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  incomplete: boolean = true;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    if(this.route.snapshot.data['profileCompleted'] === false)
    this.incomplete = true;
  }

  addProject(){
    console.log("Project added");
  }

}
