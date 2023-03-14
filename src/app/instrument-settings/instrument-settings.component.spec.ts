import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstrumentSettingsComponent } from './instrument-settings.component';

describe('InstrumentSettingsComponent', () => {
  let component: InstrumentSettingsComponent;
  let fixture: ComponentFixture<InstrumentSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstrumentSettingsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InstrumentSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
