import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'popover',
  templateUrl: './popover.component.html',
  styleUrls: ['./popover.component.scss']
})
export class PopoverComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }


  onPreHide(event) {
    // event.cancel(); // cancel hiding popover
  }

}
