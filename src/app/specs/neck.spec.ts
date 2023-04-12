import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NeckComponent } from '../neck/neck.component';

describe('ScaleChartComponent', () => {
  let component: NeckComponent;
  let fixture: ComponentFixture<NeckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NeckComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NeckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
