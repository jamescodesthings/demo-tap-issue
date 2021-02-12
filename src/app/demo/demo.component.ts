import { Component } from '@angular/core';

@Component({
  selector: 'page-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss'],
})
export class DemoComponent {
  history = '';

  constructor() {
    console.log('Constructed Demo Component');
  }

  tapDemoIssue(source: string = '') {
    this.history += `${source} tapped\n`;
  }
}
