import { TestBed } from '@angular/core/testing';

import { FiltrosGeograficosService } from './filtros-geograficos.service';

describe('FiltrosGeograficosService', () => {
  let service: FiltrosGeograficosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FiltrosGeograficosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
