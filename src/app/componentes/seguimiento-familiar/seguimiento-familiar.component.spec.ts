import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeguimientoFamiliarComponent } from './seguimiento-familiar.component';

describe('SeguimientoFamiliarComponent', () => {
  let component: SeguimientoFamiliarComponent;
  let fixture: ComponentFixture<SeguimientoFamiliarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeguimientoFamiliarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeguimientoFamiliarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
