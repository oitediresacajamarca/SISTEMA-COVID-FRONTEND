import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidacionDniComponent } from './validacion-dni.component';

describe('ValidacionDniComponent', () => {
  let component: ValidacionDniComponent;
  let fixture: ComponentFixture<ValidacionDniComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValidacionDniComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidacionDniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
