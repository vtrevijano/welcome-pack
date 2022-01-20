import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-son-component',
  templateUrl: './son-component.component.html',
  styleUrls: ['./son-component.component.scss']
})
export class SonComponentComponent implements OnInit {
@Input() inputText: string;

@Output() emitMessage = new EventEmitter<string>();
message: string = '';

  sendMessage() {
    this.emitMessage.emit(this.message);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
