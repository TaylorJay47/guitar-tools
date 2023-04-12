import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NeckHelpComponent } from '../neck-help/neck-help.component';

describe('NeckHelpComponent', () => {
  let component: NeckHelpComponent;
  let fixture: ComponentFixture<NeckHelpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NeckHelpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NeckHelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
