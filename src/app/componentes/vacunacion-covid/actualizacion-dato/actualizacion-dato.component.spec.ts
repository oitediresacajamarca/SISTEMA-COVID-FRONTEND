import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizacionDatoComponent } from './actualizacion-dato.component';

describe('ActualizacionDatoComponent', () => {
  let component: ActualizacionDatoComponent;
  let fixture: ComponentFixture<ActualizacionDatoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActualizacionDatoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActualizacionDatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
