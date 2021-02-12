import { Component, EventEmitter, Input, Output } from '@angular/core';
import { isIOS } from '@nativescript/core';

@Component({
  selector: 'test-list',
  templateUrl: './test-list.component.html',
  styleUrls: ['./test-list.component.scss'],
})
export class TestListComponent {
  constructor() {
    console.log('test-list constructed');
  }

  @Input() items: string[];

  @Output() tap = new EventEmitter<string>();

  onItemLoading($event: any) {
    if (isIOS) {
      const iosCell = $event.ios;
      iosCell.selectionStyle = UITableViewCellSelectionStyle.None;
    }
  }

  // Item here should always be one of this.items which is a string array.
  onTap(item: any) {
    console.log(`test-list ${item} tapped`);
    this.tap.next(item);
  }
}
