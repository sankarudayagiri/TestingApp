import { TestBed } from '@angular/core/testing';

import { SomeSerService } from './some-ser.service';

describe('SomeSerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SomeSerService = TestBed.get(SomeSerService);
    expect(service).toBeTruthy();
  });
});
