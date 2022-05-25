import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-component',
  templateUrl: './card-component.component.html',
  styleUrls: ['./card-component.component.css'],
})
export class CardComponentComponent implements OnInit {
  @Input() data: {
    picture: String;
    age: number;
    name: String;
    company: String;
    phone: String;
    address: String;
  };
  constructor() {}

  ngOnInit(): void {}
}
