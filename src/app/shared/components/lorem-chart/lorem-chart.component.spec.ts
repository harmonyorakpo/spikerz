import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoremChartComponent } from './lorem-chart.component';

describe('LoremChartComponent', () => {
  let component: LoremChartComponent;
  let fixture: ComponentFixture<LoremChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoremChartComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LoremChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
