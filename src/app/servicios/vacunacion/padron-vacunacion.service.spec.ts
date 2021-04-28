import { TestBed } from '@angular/core/testing';

import { PadronVacunacionService } from './padron-vacunacion.service';

describe('PadronVacunacionService', () => {
  let service: PadronVacunacionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PadronVacunacionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
