import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'tappable-label',
  templateUrl: './tappable-label.component.html'
})
export class TappableLabelComponent {
  @Input() text: string;

  @Output() tap = new EventEmitter<void>();

  constructor() {
  }

  onTap() {
    console.log('tappable-label.onTap()');
    this.tap.next();
  }
}
