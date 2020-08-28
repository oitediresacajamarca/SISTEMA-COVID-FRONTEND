import { TestBed } from '@angular/core/testing';

import { Ficha100Service } from './ficha-100.service';

describe('Ficha100Service', () => {
  let service: Ficha100Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Ficha100Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
