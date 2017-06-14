import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeuPrimeiroComponentPorLinhaDeComandoComponent } from './meu-primeiro-component-por-linha-de-comando.component';

describe('MeuPrimeiroComponentPorLinhaDeComandoComponent', () => {
  let component: MeuPrimeiroComponentPorLinhaDeComandoComponent;
  let fixture: ComponentFixture<MeuPrimeiroComponentPorLinhaDeComandoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeuPrimeiroComponentPorLinhaDeComandoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeuPrimeiroComponentPorLinhaDeComandoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
