import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { dataPerson } from '../card-component/dataPerson';

@Component({
  selector: 'app-tambah-data',
  templateUrl: './tambah-data.component.html',
  styleUrls: ['./tambah-data.component.css'],
})
export class TambahDataComponent implements OnInit {
  @Output() addData = new EventEmitter<{
    age: number;
    name: string;
    company: string;
    phone: string;
    address: string;
    like?: number;
  }>();
  @Output() aturHide = new EventEmitter<void>();
  constructor() {}
  name = '';
  ngOnInit(): void {}
  setHide() {
    this.aturHide.emit();
  }

  tambahData(
    name: HTMLInputElement,
    address: HTMLTextAreaElement,
    company: HTMLTextAreaElement,
    nohp: HTMLInputElement,
    age: HTMLInputElement
  ) {
    //
    this.addData.emit({
      age: parseInt(age.value),
      name: name.value,
      company: company.value,
      phone: nohp.value,
      address: address.value,
      like: 0,
    });
  }
}
