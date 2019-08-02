import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'custom-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {
  target: string = '';
  constructor() { }

  ngOnInit() {
  }

}
