import { TestBed } from '@angular/core/testing';

import { SinadefService } from './sinadef.service';

describe('SinadefService', () => {
  let service: SinadefService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SinadefService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
