import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.scss']
})
export class SwitchComponent implements OnInit {
  target: boolean = true;
  constructor() { }

  ngOnInit() {
  }

}
