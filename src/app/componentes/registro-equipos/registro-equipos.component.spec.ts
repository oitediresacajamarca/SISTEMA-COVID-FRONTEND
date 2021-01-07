import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroEquiposComponent } from './registro-equipos.component';

describe('RegistroEquiposComponent', () => {
  let component: RegistroEquiposComponent;
  let fixture: ComponentFixture<RegistroEquiposComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistroEquiposComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroEquiposComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
