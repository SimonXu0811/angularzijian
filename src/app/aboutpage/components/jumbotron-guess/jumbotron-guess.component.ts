import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-jumbotron-guess',
  templateUrl: './jumbotron-guess.component.html',
  styleUrls: ['./jumbotron-guess.component.css']
})
export class JumbotronGuessComponent implements OnInit {
  selectValue = "choose";
  formGroup: FormGroup;


  constructor() {
  }

  ngOnInit() {
    this.formGroup = new FormGroup({
      select: new FormControl()
    })
    this.selectValue = localStorage.getItem("framework") == null ? "choose" : localStorage.getItem("framework");
    if (this.selectValue === 'Angular') {
      this.formGroup.disable();
    }
  }

  change() {
    this.selectValue = this.formGroup.controls.select.value;
    if (this.selectValue === "Angular") {
      this.formGroup.disable();
      localStorage.setItem("framework", this.selectValue);
    }
  }

}
