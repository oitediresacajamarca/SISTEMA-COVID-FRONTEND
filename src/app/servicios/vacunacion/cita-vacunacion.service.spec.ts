import { TestBed } from '@angular/core/testing';

import { CitaVacunacionService } from './cita-vacunacion.service';

describe('CitaVacunacionService', () => {
  let service: CitaVacunacionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CitaVacunacionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
