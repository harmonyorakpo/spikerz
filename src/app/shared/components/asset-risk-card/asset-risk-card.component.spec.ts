import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetRiskCardComponent } from './asset-risk-card.component';

describe('AssetRiskCardComponent', () => {
  let component: AssetRiskCardComponent;
  let fixture: ComponentFixture<AssetRiskCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AssetRiskCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssetRiskCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
