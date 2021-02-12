import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { interval, Subscription } from 'rxjs';


@Component({
  selector: 'event-emitter-test-same-name',
  templateUrl: './event-emitter-test-same-name.component.html'
})
export class EventEmitterTestSameNameComponent {
  @Output() tap = new EventEmitter<void>();

  source = interval(1000);
  emitting = false;
  sub$: Subscription = null;

  constructor() {
  }

  toggle() {
    console.log('toggle tapped');
    this.emitting = !this.emitting;
    if (this.emitting) {
      this.startEmitting();
    } else {
      this.stopEmitting();
    }
  }

  private startEmitting() {
    if (this.sub$) {
      console.error('something bad happened, duplicate sub');
      return;
    }

    this.sub$ = this.source.subscribe(() => {
      console.log('this.emit.next');
      this.tap.next();
    })
  }

  private stopEmitting() {
    this.sub$.unsubscribe();
    this.sub$ = null;
  }
}
