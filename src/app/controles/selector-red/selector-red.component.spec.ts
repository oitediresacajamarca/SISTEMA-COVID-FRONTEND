import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectorRedComponent } from './selector-red.component';

describe('SelectorRedComponent', () => {
  let component: SelectorRedComponent;
  let fixture: ComponentFixture<SelectorRedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectorRedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectorRedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
