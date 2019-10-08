import { TestBed } from '@angular/core/testing';

import { CloudeasierService } from './cloudeasier.service';

describe('CloudeasierService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CloudeasierService = TestBed.get(CloudeasierService);
    expect(service).toBeTruthy();
  });
});
