import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'tappable-label-investigation',
  templateUrl: './tappable-label-investigation.component.html'
})
export class TappableLabelInvestigationComponent {
  @Input() text: string;

  // @Output() tap = new EventEmitter<void>();

  constructor() {
  }
  //
  // onTap() {
  //   console.log('tappable-label-investigation.onTap()');
  //   this.tap.next();
  // }
}
