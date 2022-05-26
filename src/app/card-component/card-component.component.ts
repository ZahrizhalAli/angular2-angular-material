import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card-component',
  templateUrl: './card-component.component.html',
  styleUrls: ['./card-component.component.css'],
})
export class CardComponentComponent implements OnInit {
  @Input() data: {
    index: number;
    picture: String;
    age: number;
    name: String;
    company: String;
    phone: String;
    address: String;
  };

  @Output() likeClicked = new EventEmitter<{
    index: number;
    picture: String;
    age: number;
    name: String;
    company: String;
    phone: String;
    address: String;
  }>();
  constructor() {}

  ngOnInit(): void {}

  triggerLike(data: {
    index: number;
    picture: String;
    age: number;
    name: String;
    company: String;
    phone: String;
    address: String;
  }) {
    //
    this.likeClicked.emit(data);
  }
}
