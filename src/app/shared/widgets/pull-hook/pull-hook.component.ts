import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pull-hook',
  templateUrl: './pull-hook.component.html',
  styleUrls: ['./pull-hook.component.scss']
})
export class PullHookComponent {
  message: string = 'Pull down to refresh';

  items: number[] = [1, 2, 3, 4, 5];

  constructor() {
  }

  onAction($event) {
    setTimeout(() => {
      $event.done();
      this.items.push(0);
    }, 1000);
  }

  onChangeState($event) {
    switch ($event.state) {
      case 'initial':
        this.message = 'Pull down to refresh';
        break;
      case 'preaction':
        this.message = 'Release to refresh';
        break;
      case 'action':
        this.message = 'Loading data...';
        break;
    }
  }
}
