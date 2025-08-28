import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ContentBlockDataService } from './content-block-data.service';

describe('ContentBlockDataService', () => {
  let service: ContentBlockDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(ContentBlockDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
