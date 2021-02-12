import { Component, ElementRef, NgZone, ViewChild } from '@angular/core';
import { RouterExtensions } from '@nativescript/angular';
import { ScrollView } from '@nativescript/core';

@Component({
  selector: 'page-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss'],
})
export class DemoComponent {
  ctr = 0;
  history = '';

  _scrollView: ScrollView;
  @ViewChild('sv') set scrollView(er: ElementRef) {
    this._scrollView = er.nativeElement as ScrollView;
  }

  constructor(private zone: NgZone, private router: RouterExtensions) {
    console.log('Constructed Demo Component');
  }

  tapDemoIssue(source: string = '') {
    this.zone.run(() => {
      this.history += `${++this.ctr}: ${source} tapped\n`;
      if (this._scrollView) {
        this._scrollView.scrollToVerticalOffset(this._scrollView?.scrollableHeight, false);
      }
    })
  }

  clear() {
    this.ctr = 0;
    this.history = '';
  }

  toDemo2() {
    return this.router.navigate(['/demo-2']);
  }
}
