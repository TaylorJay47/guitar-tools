import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArpeggiatorComponent } from '../arpeggiator/arpeggiator.component';

describe('ArpeggiatorComponent', () => {
  let component: ArpeggiatorComponent;
  let fixture: ComponentFixture<ArpeggiatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArpeggiatorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArpeggiatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
