import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Item, ItemArray } from '../types/item';
import { LineThroughDirective } from '../line-through.directive';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, LineThroughDirective],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss',
})
export class ListComponent {
  @Input() items: ItemArray = [];
  @Output() toggleCompleted = new EventEmitter<number>();

  toggleCompleteHandler(index: number) {
    this.toggleCompleted.emit(index);
  }
}
