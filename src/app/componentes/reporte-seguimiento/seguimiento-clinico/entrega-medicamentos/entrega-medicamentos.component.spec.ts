import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntregaMedicamentosComponent } from './entrega-medicamentos.component';

describe('EntregaMedicamentosComponent', () => {
  let component: EntregaMedicamentosComponent;
  let fixture: ComponentFixture<EntregaMedicamentosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntregaMedicamentosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntregaMedicamentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
