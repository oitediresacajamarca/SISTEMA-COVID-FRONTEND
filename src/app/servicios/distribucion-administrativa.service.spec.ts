import { TestBed } from '@angular/core/testing';

import { DistribucionAdministrativaService } from './distribucion-administrativa.service';

describe('DistribucionAdministrativaService', () => {
  let service: DistribucionAdministrativaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DistribucionAdministrativaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
