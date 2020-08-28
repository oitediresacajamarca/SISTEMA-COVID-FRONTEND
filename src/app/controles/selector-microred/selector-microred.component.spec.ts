import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectorMicroredComponent } from './selector-microred.component';

describe('SelectorMicroredComponent', () => {
  let component: SelectorMicroredComponent;
  let fixture: ComponentFixture<SelectorMicroredComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectorMicroredComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectorMicroredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
