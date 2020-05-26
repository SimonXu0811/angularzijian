import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-note-history',
  templateUrl: './note-history.component.html',
  styleUrls: ['./note-history.component.css']
})
export class NoteHistoryComponent implements OnInit {

  isClosed: boolean;
  constructor() { }

  ngOnInit() {
    this.isClosed = false;
  }

  close() {
    this.isClosed = true;
  }
}
