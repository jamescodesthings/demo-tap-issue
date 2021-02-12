import { Component } from '@angular/core';
import { RouterExtensions } from '@nativescript/angular';

@Component({
  selector: 'page-demo-2',
  templateUrl: './demo-2.component.html',
  styleUrls: ['./demo-2.component.scss']
})
export class Demo2Component {
  constructor(private router: RouterExtensions) {
    console.log('demo-2 constructed')
  }

  toDemo1() {
    return this.router.navigate(['/demo']);
  }
}
