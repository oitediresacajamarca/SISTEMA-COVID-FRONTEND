import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VacunacionCovidComponent } from './vacunacion-covid.component';

describe('VacunacionCovidComponent', () => {
  let component: VacunacionCovidComponent;
  let fixture: ComponentFixture<VacunacionCovidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VacunacionCovidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VacunacionCovidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
