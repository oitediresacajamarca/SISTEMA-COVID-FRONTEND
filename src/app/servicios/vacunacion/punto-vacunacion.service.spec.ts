import { TestBed } from '@angular/core/testing';

import { PuntoVacunacionService } from './punto-vacunacion.service';

describe('PuntoVacunacionService', () => {
  let service: PuntoVacunacionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PuntoVacunacionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
