import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeguimientoEpidemiologicoComponent } from './seguimiento-epidemiologico.component';

describe('SeguimientoEpidemiologicoComponent', () => {
  let component: SeguimientoEpidemiologicoComponent;
  let fixture: ComponentFixture<SeguimientoEpidemiologicoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeguimientoEpidemiologicoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeguimientoEpidemiologicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
