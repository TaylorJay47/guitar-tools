import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChordDecoderComponent } from '../chord-decoder/chord-decoder.component';

describe('ChordDecoderComponent', () => {
  let component: ChordDecoderComponent;
  let fixture: ComponentFixture<ChordDecoderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChordDecoderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChordDecoderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
