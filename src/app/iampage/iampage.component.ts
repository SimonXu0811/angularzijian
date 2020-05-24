import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-iampage',
  templateUrl: './iampage.component.html',
  styleUrls: ['./iampage.component.css']
})
export class IampageComponent implements OnInit {
  datacontent="now";

  constructor() { }

  ngOnInit() {
    // @ts-ignore
    $('[data-toggle="popover"]').popover();
  }

}
