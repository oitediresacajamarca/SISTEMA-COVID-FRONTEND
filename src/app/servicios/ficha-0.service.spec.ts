import { TestBed } from '@angular/core/testing';

import { Ficha0Service } from './ficha-0.service';

describe('Ficha0Service', () => {
  let service: Ficha0Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Ficha0Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
