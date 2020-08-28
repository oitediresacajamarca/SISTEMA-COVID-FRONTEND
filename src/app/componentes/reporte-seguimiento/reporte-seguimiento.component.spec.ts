import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReporteSeguimientoComponent } from './reporte-seguimiento.component';

describe('ReporteSeguimientoComponent', () => {
  let component: ReporteSeguimientoComponent;
  let fixture: ComponentFixture<ReporteSeguimientoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReporteSeguimientoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReporteSeguimientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
