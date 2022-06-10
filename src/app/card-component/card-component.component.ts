import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { dataPerson } from './dataPerson';
@Component({
  selector: 'app-card-component',
  templateUrl: './card-component.component.html',
  styleUrls: ['./card-component.component.css'],
})
export class CardComponentComponent implements OnInit {
  @Input() data: dataPerson;

  @Output() likeClicked = new EventEmitter<dataPerson>();
  constructor() {}

  ngOnInit(): void {}
  triggerLike(data: dataPerson) {
    //
    this.likeClicked.emit();
  }
}
