import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RotaNaoEncontradaComponent } from './rota-nao-encontrada.component';

describe('RotaNaoEncontradaComponent', () => {
  let component: RotaNaoEncontradaComponent;
  let fixture: ComponentFixture<RotaNaoEncontradaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RotaNaoEncontradaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RotaNaoEncontradaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
