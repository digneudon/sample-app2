import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-test2',
  template: `
    <div *ngIf="item" class="test">
      {{ itemName + ':' + item?.id + '/' + item?.name }}
    </div>
    <div *ngIf="!item" class="test2">
      {{ itemName + ':Nothing' }}
    </div>
  `,
  styles: [
    `
      .test {
        font-weight: bold;
        text-align: center;
        padding: 1em;
      }
      .test2 {
        text-align: center;
        padding: 1em;
      }
    `
  ]
})
export class Test2Component {
  @Input() itemName: string;
  @Input() item: { id: number; name: string };
}
