import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PruebasRapidasDetalleComponent } from './pruebas-rapidas-detalle.component';

describe('PruebasRapidasDetalleComponent', () => {
  let component: PruebasRapidasDetalleComponent;
  let fixture: ComponentFixture<PruebasRapidasDetalleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PruebasRapidasDetalleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PruebasRapidasDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
