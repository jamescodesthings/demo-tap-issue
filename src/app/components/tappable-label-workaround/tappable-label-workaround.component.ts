import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'tappable-label-workaround',
  templateUrl: './tappable-label-workaround.component.html'
})
export class TappableLabelWorkaroundComponent {
  @Input() text: string;

  @Output() tap = new EventEmitter<void>();

  constructor() {
  }

  onTap() {
    console.log('tappable-label-workaround.onTap()');
    this.tap.next();
  }
}
