import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministracionEquiposComponent } from './administracion-equipos.component';

describe('AdministracionEquiposComponent', () => {
  let component: AdministracionEquiposComponent;
  let fixture: ComponentFixture<AdministracionEquiposComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdministracionEquiposComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdministracionEquiposComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
