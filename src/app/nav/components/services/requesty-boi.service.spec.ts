import { TestBed } from '@angular/core/testing';

import { RequestyBoiService } from './requesty-boi.service';

describe('RequestyBoiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RequestyBoiService = TestBed.get(RequestyBoiService);
    expect(service).toBeTruthy();
  });
});
