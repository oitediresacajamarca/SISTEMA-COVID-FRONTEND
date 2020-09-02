import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusquedaPorIdentificacionComponent } from './busqueda-por-identificacion.component';

describe('BusquedaPorIdentificacionComponent', () => {
  let component: BusquedaPorIdentificacionComponent;
  let fixture: ComponentFixture<BusquedaPorIdentificacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusquedaPorIdentificacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusquedaPorIdentificacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
