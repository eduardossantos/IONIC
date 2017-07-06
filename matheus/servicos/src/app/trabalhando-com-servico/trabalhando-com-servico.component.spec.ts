import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrabalhandoComServicoComponent } from './trabalhando-com-servico.component';

describe('TrabalhandoComServicoComponent', () => {
  let component: TrabalhandoComServicoComponent;
  let fixture: ComponentFixture<TrabalhandoComServicoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrabalhandoComServicoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrabalhandoComServicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
