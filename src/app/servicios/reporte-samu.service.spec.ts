import { TestBed } from '@angular/core/testing';

import { ReporteSamuService } from './reporte-samu.service';

describe('ReporteSamuService', () => {
  let service: ReporteSamuService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReporteSamuService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
