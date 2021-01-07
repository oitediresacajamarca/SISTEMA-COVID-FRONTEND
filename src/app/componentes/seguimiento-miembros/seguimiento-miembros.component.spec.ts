import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeguimientoMiembrosComponent } from './seguimiento-miembros.component';

describe('SeguimientoMiembrosComponent', () => {
  let component: SeguimientoMiembrosComponent;
  let fixture: ComponentFixture<SeguimientoMiembrosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeguimientoMiembrosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeguimientoMiembrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
