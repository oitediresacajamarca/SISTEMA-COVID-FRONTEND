import { TestBed } from '@angular/core/testing';

import { HospitalizadosService } from './hospitalizados.service';

describe('HospitalizadosService', () => {
  let service: HospitalizadosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HospitalizadosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
