import { TestBed } from '@angular/core/testing';

import { AactualizacionDataService } from './aactualizacion-data.service';

describe('AactualizacionDataService', () => {
  let service: AactualizacionDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AactualizacionDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
