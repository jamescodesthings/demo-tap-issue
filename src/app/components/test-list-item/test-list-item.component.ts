import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'test-list-item',
  templateUrl: './test-list-item.component.html',
  styleUrls: ['./test-list-item.component.scss']
})
export class TestListItemComponent {
  @Input() text: string;

  @Output() tap = new EventEmitter<void>();

  constructor() {
  }

  onTap() {
    console.log('list-item tapped');
    this.tap.next();
  }
}
