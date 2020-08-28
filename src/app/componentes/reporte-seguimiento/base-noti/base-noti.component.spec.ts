import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseNotiComponent } from './base-noti.component';

describe('BaseNotiComponent', () => {
  let component: BaseNotiComponent;
  let fixture: ComponentFixture<BaseNotiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaseNotiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaseNotiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
