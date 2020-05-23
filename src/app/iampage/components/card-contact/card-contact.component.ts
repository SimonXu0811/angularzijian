import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-card-contact',
  templateUrl: './card-contact.component.html',
  styleUrls: ['./card-contact.component.css']
})
export class CardContactComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  nav2github() {
    this.router.navigateByUrl("https://github.com/SimonXu0811")
  }
}
