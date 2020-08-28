import { TestBed } from '@angular/core/testing';

import { Ficha300Service } from './ficha-300.service';

describe('Ficha300Service', () => {
  let service: Ficha300Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Ficha300Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
