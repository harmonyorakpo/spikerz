import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AssetRiskService } from './asset-risk.service';

describe('AssetRiskService', () => {
  let service: AssetRiskService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(AssetRiskService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
