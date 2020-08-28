import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectorIpressCompletoHorizontalComponent } from './selector-ipress-completo-horizontal.component';

describe('SelectorIpressCompletoHorizontalComponent', () => {
  let component: SelectorIpressCompletoHorizontalComponent;
  let fixture: ComponentFixture<SelectorIpressCompletoHorizontalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectorIpressCompletoHorizontalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectorIpressCompletoHorizontalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
