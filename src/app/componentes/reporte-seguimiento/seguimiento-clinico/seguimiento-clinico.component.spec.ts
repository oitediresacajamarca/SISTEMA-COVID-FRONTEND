import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeguimientoClinicoComponent } from './seguimiento-clinico.component';

describe('SeguimientoClinicoComponent', () => {
  let component: SeguimientoClinicoComponent;
  let fixture: ComponentFixture<SeguimientoClinicoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeguimientoClinicoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeguimientoClinicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
