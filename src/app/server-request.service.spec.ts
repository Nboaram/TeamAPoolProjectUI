import { TestBed } from '@angular/core/testing';

import { ServerRequestService } from './server-request.service';

describe('ServerRequestService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServerRequestService = TestBed.get(ServerRequestService);
    expect(service).toBeTruthy();
  });
});
