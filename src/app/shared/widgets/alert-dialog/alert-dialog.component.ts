import { Component, OnInit } from '@angular/core';
import * as ons from 'onsenui';

@Component({
  selector: 'alert-dialog',
  templateUrl: './alert-dialog.component.html',
  styleUrls: ['./alert-dialog.component.scss']
})
export class AlertDialogComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  alert() {
    ons.notification.alert('Hello, world!');
  }

  confirm() {
    ons.notification.confirm({
      message: 'This dialog can be canceled by tapping the background or using the back button on your device.',
      cancelable: true,
      callback: i => {
        if (i == -1) {
          ons.notification.alert({ message: 'You canceled it!' });
        }
      }
    });
  }

  prompt() {
    ons.notification.prompt({
      message: 'What is the meaning of Life, the Universe and Everything?',
      callback: answer => {
        if (answer === '42') {
          ons.notification.alert({ message: 'That\'s the correct answer!' });
        } else {
          ons.notification.alert({ message: 'Incorrect! Please try again!' });
        }
      }
    });
  }

  toast() {
    ons.notification.toast('Hello, world!', { timeout: 2000 });
  }

}
