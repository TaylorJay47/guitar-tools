import {Component, DoCheck, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {Music} from "../util/music";

@Component({
  selector: 'app-neck-controls',
  templateUrl: './neck-controls.component.html',
  styleUrls: ['./neck-controls.component.css']
})
export class NeckControlsComponent implements OnInit {
  @Input() tune: string = 'Standard';
  @Output() tuneChange = new EventEmitter<string>()
  @Input() key: string = 'C';
  @Output() keyChange = new EventEmitter<string>()
  @Input() quality: string = 'Major';
  @Output() qualityChange = new EventEmitter<string>()
  oldTune = 'Standard'
  oldKey = 'C'
  oldQuality = 'Major'

  constructor() {};

  ngOnInit(): void {};

  keys = Music.notes['C'];
  tunings = Object.entries(Music.tunings).map(([key, val]) => {
    return val.name;
  });
  qualities = Object.entries(Music.quality).map(([key, val]) => {
    return val.name;
  });

  controlsForm = new FormGroup({
    tuningControl: new FormControl('Standard'),
    keyControl: new FormControl('C'),
    qualityControl: new FormControl('Major')
  });

  onSubmit() {
    if (this.tune !== this.oldTune) {
      if (this.tune) {
        this.tuneChange.emit(this.tune)
        this.oldTune = this.tune;
      }
    }
    if (this.key !== this.oldKey) {
      if (this.key) {
        this.keyChange.emit(this.key)
        this.oldKey = this.key;
      }
    }
    if (this.quality !== this.oldQuality) {
      if (this.quality) {
        this.qualityChange.emit(this.quality)
        this.oldQuality = this.quality;
      }
    }
  }

  onReset() {
    //this.controlsForm.controls.tuningControl.setValue('Standard')
    this.tune = 'Standard'
    this.tuneChange.emit(this.tune)
    this.key = 'C'
    this.keyChange.emit(this.key)
    this.quality = 'Major'
    this.qualityChange.emit(this.quality)
  }

  //TODO add form for scale selection
  //TODO import scale chart
  //TODO create interaction between form and scale chart
}
