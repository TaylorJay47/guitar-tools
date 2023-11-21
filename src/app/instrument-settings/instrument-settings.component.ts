// @ts-nocheck
import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-instrument-settings',
  templateUrl: './instrument-settings.component.html',
  styleUrls: ['../styles/instrument-settings.component.scss']
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
  defaultInstrument = [];


  constructor() { }

  ngOnInit() {
    const savedInstrument = localStorage.getItem('instrument');
    if (savedInstrument) {
      console.log('Saved instrument found: ' + savedInstrument)
      this.defaultInstrument = savedInstrument.split(',');
      this.stringNo = savedInstrument.split(',').length;
      setTimeout(() => {
        this.onSubmit(savedInstrument.split(','));
      }, 5);
    }
  }

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

  onSubmit(settings?) {
    if (settings) {
      this.tuningChange.emit(settings);
      this.doUpdate.emit();
    } else {
      let newtuning = [];
      $('.string-tuning').each((index, el) => {
        newtuning.push(el.value);
      })
      this.tuningChange.emit(newtuning.reverse());
      this.doUpdate.emit();
      return newtuning
    }
  }

  onReset() {
    this.stringNo = this.defaultInstrument.length;
    $('.string-tuning').each((index, el) => {
      el.value = [...this.defaultInstrument].reverse()[index];
    })
    console.log('Reset to instrument: ' + this.defaultInstrument);
  }

  onSave() {
    this.defaultInstrument = this.onSubmit();
    console.log('Saving new instrument: ' + this.defaultInstrument.join(','));
    localStorage.setItem('instrument', this.defaultInstrument.join(','));
  }
}
