import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { interval, Subscription } from 'rxjs';


@Component({
  selector: 'event-emitter-test',
  templateUrl: './event-emitter-test.component.html'
})
export class EventEmitterTestComponent {
  @Output() emit = new EventEmitter<void>();

  source = interval(1000);
  emitting = false;
  sub$: Subscription = null;

  constructor() {
  }

  toggle() {
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
      console.log('this.emit.next')
      this.emit.next();
    })
  }

  private stopEmitting() {
    this.sub$.unsubscribe();
    this.sub$ = null;
  }
}
