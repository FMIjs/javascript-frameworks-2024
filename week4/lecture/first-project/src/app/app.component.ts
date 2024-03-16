import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { NewItemComponent } from './new-item/new-item.component';
import { ListComponent } from './list/list.component';
import { ItemArray } from './types/item';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NewItemComponent, ListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  items: ItemArray = [];
  placeholderValue = 'Enter value...';

  newItemHandler(text: string) {
    this.items.push({ text, completed: false });
  }

  toggleCompleteHandler(index: number) {
    this.items[index].completed = !this.items[index].completed;
  }
}
