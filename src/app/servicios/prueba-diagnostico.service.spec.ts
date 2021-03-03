import { TestBed } from '@angular/core/testing';

import { PruebaDiagnosticoService } from './prueba-diagnostico.service';

describe('PruebaDiagnosticoService', () => {
  let service: PruebaDiagnosticoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PruebaDiagnosticoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
