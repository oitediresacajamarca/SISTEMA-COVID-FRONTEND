import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EncabesadoComponent } from './encabesado.component';

describe('EncabesadoComponent', () => {
  let component: EncabesadoComponent;
  let fixture: ComponentFixture<EncabesadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EncabesadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EncabesadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
