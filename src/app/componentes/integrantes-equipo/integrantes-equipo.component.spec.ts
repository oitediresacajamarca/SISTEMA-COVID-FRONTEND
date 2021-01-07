import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntegrantesEquipoComponent } from './integrantes-equipo.component';

describe('IntegrantesEquipoComponent', () => {
  let component: IntegrantesEquipoComponent;
  let fixture: ComponentFixture<IntegrantesEquipoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntegrantesEquipoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntegrantesEquipoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
