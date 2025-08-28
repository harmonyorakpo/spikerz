import { TestBed } from '@angular/core/testing';

import { ContentBlockDataService } from './content-block-data.service';

describe('ContentBlockDataService', () => {
  let service: ContentBlockDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContentBlockDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
