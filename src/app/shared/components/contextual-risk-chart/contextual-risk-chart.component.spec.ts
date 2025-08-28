import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ContextualRiskChartComponent } from './contextual-risk-chart.component';

describe('ContextualRiskChartComponent', () => {
  let component: ContextualRiskChartComponent;
  let fixture: ComponentFixture<ContextualRiskChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContextualRiskChartComponent, HttpClientTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(ContextualRiskChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
