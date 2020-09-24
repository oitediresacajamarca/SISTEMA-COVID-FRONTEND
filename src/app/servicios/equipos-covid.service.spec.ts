import { TestBed } from '@angular/core/testing';

import { EquiposCovidService } from './equipos-covid.service';

describe('EquiposCovidService', () => {
  let service: EquiposCovidService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EquiposCovidService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
