import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ficha00Component } from './ficha00.component';

describe('Ficha00Component', () => {
  let component: Ficha00Component;
  let fixture: ComponentFixture<Ficha00Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ficha00Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ficha00Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
