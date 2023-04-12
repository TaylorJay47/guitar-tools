import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-neck-help',
  templateUrl: './neck-help.component.html',
  styleUrls: ['../styles/neck-help.component.scss']
})
export class NeckHelpComponent implements OnInit {
  @Input() mode: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
