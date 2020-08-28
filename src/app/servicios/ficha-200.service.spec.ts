import { TestBed } from '@angular/core/testing';

import { Ficha200Service } from './ficha-200.service';

describe('Ficha200Service', () => {
  let service: Ficha200Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Ficha200Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
