import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fab',
  templateUrl: './fab.component.html',
  styleUrls: ['./fab.component.scss']
})
export class FabComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onClick() {
    alert('Clicked!');
  }

}
