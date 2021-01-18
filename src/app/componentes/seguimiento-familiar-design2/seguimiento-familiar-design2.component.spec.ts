import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeguimientoFamiliarDesign2Component } from './seguimiento-familiar-design2.component';

describe('SeguimientoFamiliarDesign2Component', () => {
  let component: SeguimientoFamiliarDesign2Component;
  let fixture: ComponentFixture<SeguimientoFamiliarDesign2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeguimientoFamiliarDesign2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeguimientoFamiliarDesign2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
