import { TestBed } from '@angular/core/testing';

import { CrucesService } from './cruces.service';

describe('CrucesService', () => {
  let service: CrucesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CrucesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
