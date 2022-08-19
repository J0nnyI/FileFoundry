import { TestBed } from '@angular/core/testing';

import { DirectoryConfigApiService } from './directory-config-api.service';

describe('DirectoryConfigApiService', () => {
  let service: DirectoryConfigApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DirectoryConfigApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
