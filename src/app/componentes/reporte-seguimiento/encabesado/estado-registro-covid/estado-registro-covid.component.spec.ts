import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstadoRegistroCovidComponent } from './estado-registro-covid.component';

describe('EstadoRegistroCovidComponent', () => {
  let component: EstadoRegistroCovidComponent;
  let fixture: ComponentFixture<EstadoRegistroCovidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstadoRegistroCovidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstadoRegistroCovidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
