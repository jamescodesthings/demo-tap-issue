import { Component, OnInit } from '@angular/core';
import { RouterExtensions } from '@nativescript/angular';

@Component({
  selector: 'page-demo-2',
  templateUrl: './demo-2.component.html',
  styleUrls: ['./demo-2.component.scss']
})
export class Demo2Component implements OnInit {

  items: string[] = [];

  constructor(private router: RouterExtensions) {
    console.log('demo-2 constructed');
  }

  ngOnInit() {
    for (let i = 0; i < 20; i++) {
      this.items.push(`item ${i}`);
    }
  }

  toDemo1() {
    return this.router.navigate(['/demo']);
  }

  onTap(item: string) {
    console.log(`demo-2 tapped ${item}`);
  }
}
