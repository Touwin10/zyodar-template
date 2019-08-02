import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate, query, stagger } from '@angular/animations';

@Component({
  selector: 'timelines',
  templateUrl: './timelines.component.html',
  styleUrls: ['./timelines.component.scss'],
  animations: [

    trigger('listAnimation', [
      transition('* => *', [ // each time the binding value changes
        query(':leave', [
          stagger(100, [
            animate('0.5s', style({ transform: 'translateX(-100%)', opacity: 0 }))
          ])
        ], { optional: true }),
        query(':enter', [
          style({ opacity: 0 }),
          stagger(100, [
            animate('0.5s', style({ transform: 'translateX(0)', opacity: 1 }))
          ])
        ], { optional: true })
      ])
    ])

  ],
})
export class TimelinesComponent implements OnInit {
  items = [];

  constructor() { }

  ngOnInit() {
    [0, 1, 6, 7, 8, 9, 10, 0, 1, 6, 7, 8, 9, 10].map((i) => {
      this.items.push("User Number - " + i)
    })
  }

  showItems(arr) {
    this.items = arr.map((i) => {
      return "User Number - " + i;
    })

  }

  logAnimation(_event) {
    // console.log(_event)
  }

  hideItems() {
    this.items = [];
  }

  toggle(arr) {
    this.showItems(arr);
  }

}
