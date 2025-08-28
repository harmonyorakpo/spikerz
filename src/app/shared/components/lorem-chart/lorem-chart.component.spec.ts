import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { LoremChartComponent } from './lorem-chart.component';

describe('LoremChartComponent', () => {
  let component: LoremChartComponent;
  let fixture: ComponentFixture<LoremChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoremChartComponent, HttpClientTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(LoremChartComponent);
    component = fixture.componentInstance;
    // Provide mock riskData input to prevent undefined errors
    component.riskData = { critical: 0, high: 0, medium: 0, low: 0 };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
