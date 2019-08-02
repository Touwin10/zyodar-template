import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss']
})
export class ProgressBarComponent implements OnInit {
  v: number = 0;

  constructor() {
    setInterval(() => {
      this.v = (this.v + 10) % 110;
    }, 800);
  }

  ngOnInit() {
  }

}
