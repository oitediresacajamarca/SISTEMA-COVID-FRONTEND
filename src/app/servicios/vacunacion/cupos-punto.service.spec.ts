import { TestBed } from '@angular/core/testing';

import { CuposPuntoService } from './cupos-punto.service';

describe('CuposPuntoService', () => {
  let service: CuposPuntoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CuposPuntoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
