import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelResultadosComponent } from './panel-resultados.component';

describe('PanelResultadosComponent', () => {
  let component: PanelResultadosComponent;
  let fixture: ComponentFixture<PanelResultadosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PanelResultadosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelResultadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
