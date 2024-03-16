import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-new-item',
  standalone: true,
  imports: [],
  templateUrl: './new-item.component.html',
  styleUrl: './new-item.component.scss',
})
export class NewItemComponent {
  @Input({ required: false }) placeholderText?: string;
  @Output() newItem = new EventEmitter<string>();

  buttonClickHandler(inputElement: HTMLInputElement) {
    const { value } = inputElement;
    if (!value) return;
    this.newItem.emit(value);
    inputElement.value = '';
  }
}
