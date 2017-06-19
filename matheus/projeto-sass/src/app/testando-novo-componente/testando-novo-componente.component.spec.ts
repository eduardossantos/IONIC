import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestandoNovoComponenteComponent } from './testando-novo-componente.component';

describe('TestandoNovoComponenteComponent', () => {
  let component: TestandoNovoComponenteComponent;
  let fixture: ComponentFixture<TestandoNovoComponenteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestandoNovoComponenteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestandoNovoComponenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
