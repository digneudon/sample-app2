import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test1',
  templateUrl: './test1.component.html',
  styleUrls: ['./test1.component.css']
})
export class Test1Component implements OnInit {
  selectedItem: { id: number; name: string } = undefined;
  selectedItem2: { id: number; name: string } = undefined;

  items: { id: number; name: string }[] = [];

  // 制御用(trueが非活性)
  isDisabledItem: boolean = true;

  constructor() {}

  ngOnInit() {
    // 配列設定
    for (let index = 0; index < 10; index++) {
      this.items.push({ id: index + 1, name: `${index + 1}ban` });
    }
  }

  onChange() {
    if (this.selectedItem) {
      this.isDisabledItem = false;
    } else {
      this.isDisabledItem = true;
    }
  }
}
