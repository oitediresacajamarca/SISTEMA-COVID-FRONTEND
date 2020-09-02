import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SinadefComponent } from './sinadef.component';

describe('SinadefComponent', () => {
  let component: SinadefComponent;
  let fixture: ComponentFixture<SinadefComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SinadefComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SinadefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
