import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-receive-user-message',
  templateUrl: './receive-user-message.component.html',
  styleUrls: ['./receive-user-message.component.css']
})
export class ReceiveUserMessageComponent implements OnInit {

  data = new Array(10);
  constructor() { }

  ngOnInit() {
  }

}
