import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'ons-page[settings]',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
  @ViewChild('carousel') carousel;

  constructor() { }

  ngOnInit() {
  }

  prev() {
    this.carousel.nativeElement.prev();
  }
  next() {
    this.carousel.nativeElement.next();
  }

}
