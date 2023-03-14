// @ts-nocheck
import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-instrument-settings',
  templateUrl: './instrument-settings.component.html',
  styleUrls: ['./instrument-settings.component.css']
})
export class InstrumentSettingsComponent implements OnInit {
  @Input() mode: string = '';
  @Input() tuning: string[] = []
  @Output() tuningChange = new EventEmitter<string[]>()
  @Input() strings: string[] = []
  @Output() stringChange = new EventEmitter<string[]>()
  @Output() doUpdate = new EventEmitter<any>()
  stringNo: number = 6;
  initialLoad = true;


  constructor() { }

  ngAfterContentChecked(): void {
    if (this.initialLoad) {
      setTimeout(() => {
        $('.string-tuning').each((index, el) => {
          el.value = [...this.tuning].reverse()[index];
        })
      }, 50)
      this.initialLoad = false;
    }
  }

  updateStrings() {

  }

  onSubmit() {
    let newtuning = [];
    $('.string-tuning').each((index, el) => {
      newtuning.push(el.value);
    })
    this.tuningChange.emit(newtuning.reverse())
    this.doUpdate.emit()
  }

  onReset() {

  }
}
