import { Component, OnInit } from '@angular/core';
import { ToDoItem } from './to-do-item';
import { ITEMS } from './mock-to-do-items';
// import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-to-do-items',
  templateUrl: './to-do-items.component.html',
  styleUrls: ['./to-do-items.component.scss']
})
export class ToDoItemsComponent implements OnInit {
  items = ITEMS;
  selectedItem: ToDoItem;
  onSelect(item: ToDoItem) : void {
    this.selectedItem = item;
  }

  constructor() {
    this.selectedItem = this.items[0];
  }

  ngOnInit(): void {
  }

}
