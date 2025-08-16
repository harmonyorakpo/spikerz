import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContextualRiskChartComponent } from './contextual-risk-chart.component';

describe('ContextualRiskChartComponent', () => {
  let component: ContextualRiskChartComponent;
  let fixture: ComponentFixture<ContextualRiskChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContextualRiskChartComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContextualRiskChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
