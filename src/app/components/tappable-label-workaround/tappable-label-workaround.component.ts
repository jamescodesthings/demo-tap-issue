import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'tappable-label-workaround',
  templateUrl: './tappable-label-workaround.component.html'
})
export class TappableLabelWorkaroundComponent {
  @Input() text: string;

  noop = () => {};

  constructor() {
  }
}
