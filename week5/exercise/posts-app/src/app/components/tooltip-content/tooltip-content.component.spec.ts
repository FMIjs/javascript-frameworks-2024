import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TooltipContentComponent } from './tooltip-content.component';

describe('TooltipContentComponent', () => {
  let component: TooltipContentComponent;
  let fixture: ComponentFixture<TooltipContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TooltipContentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TooltipContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
