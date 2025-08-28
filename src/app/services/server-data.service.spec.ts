import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ServerDataService } from './server-data.service';

describe('ServerDataService', () => {
  let service: ServerDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(ServerDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
