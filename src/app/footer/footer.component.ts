import { Component, OnInit } from '@angular/core';
import { quotes } from '../util/quotes';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['../styles/footer.component.scss']
})
export class FooterComponent implements OnInit {
  quote: any;

  constructor() {
  }

  getRandomInt(min: number, max: number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  ngOnInit(): void {
    const num = this.getRandomInt(1, Object.keys(quotes.quote).length)
    this.quote = quotes.quote[num].quote + ' - ' + quotes.quote[num].author;
  }
}
