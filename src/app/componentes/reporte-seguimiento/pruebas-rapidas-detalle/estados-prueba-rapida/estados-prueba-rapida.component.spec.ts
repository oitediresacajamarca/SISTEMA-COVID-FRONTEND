import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstadosPruebaRapidaComponent } from './estados-prueba-rapida.component';

describe('EstadosPruebaRapidaComponent', () => {
  let component: EstadosPruebaRapidaComponent;
  let fixture: ComponentFixture<EstadosPruebaRapidaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstadosPruebaRapidaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstadosPruebaRapidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
