import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReporteSamuComponent } from './reporte-samu.component';

describe('ReporteSamuComponent', () => {
  let component: ReporteSamuComponent;
  let fixture: ComponentFixture<ReporteSamuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReporteSamuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReporteSamuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
