import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Music } from '../util/music';

@Component({
  selector: 'app-scale-chart',
  templateUrl: './scale-chart.component.html',
  styleUrls: ['./scale-chart.component.css']
})
export class ScaleChartComponent implements OnInit {
  @Input() tune: string = 'Standard';
  @Input() key: string = 'C';
  @Input() quality: string = 'Major';
  // @ts-ignore
  strings = Music.tunings[this.tune].strings;
  // @ts-ignore
  tuning = Music.tunings[this.tune].tuning;

  constructor() {}

  ngOnInit(): void {
  }

  ngOnChanges(): void {
    this.updateStrings();
    this.updateTuning();
  }

  updateStrings() {
    // @ts-ignore
    this.strings = Music.tunings[this.tune].strings;
  }

  updateTuning() {
    // @ts-ignore
    this.tuning = Music.tunings[this.tune].tuning;
  }
}
