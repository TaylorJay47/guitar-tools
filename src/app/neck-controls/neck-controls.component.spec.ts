import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NeckControlsComponent } from './neck-controls.component';

describe('NeckControlsComponent', () => {
  let component: NeckControlsComponent;
  let fixture: ComponentFixture<NeckControlsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NeckControlsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NeckControlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
