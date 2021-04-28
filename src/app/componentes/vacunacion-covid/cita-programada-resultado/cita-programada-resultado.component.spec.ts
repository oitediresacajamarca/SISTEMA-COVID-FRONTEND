import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CitaProgramadaResultadoComponent } from './cita-programada-resultado.component';

describe('CitaProgramadaResultadoComponent', () => {
  let component: CitaProgramadaResultadoComponent;
  let fixture: ComponentFixture<CitaProgramadaResultadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CitaProgramadaResultadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CitaProgramadaResultadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
