import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectorSubregionComponent } from './selector-subregion.component';

describe('SelectorSubregionComponent', () => {
  let component: SelectorSubregionComponent;
  let fixture: ComponentFixture<SelectorSubregionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectorSubregionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectorSubregionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
