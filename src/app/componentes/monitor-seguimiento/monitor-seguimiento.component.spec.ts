import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonitorSeguimientoComponent } from './monitor-seguimiento.component';

describe('MonitorSeguimientoComponent', () => {
  let component: MonitorSeguimientoComponent;
  let fixture: ComponentFixture<MonitorSeguimientoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonitorSeguimientoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonitorSeguimientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
