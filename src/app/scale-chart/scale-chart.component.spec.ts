import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScaleChartComponent } from './scale-chart.component';

describe('ScaleChartComponent', () => {
  let component: ScaleChartComponent;
  let fixture: ComponentFixture<ScaleChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScaleChartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScaleChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
