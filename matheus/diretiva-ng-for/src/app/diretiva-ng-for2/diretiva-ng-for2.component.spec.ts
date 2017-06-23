import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiretivaNgFor2Component } from './diretiva-ng-for2.component';

describe('DiretivaNgFor2Component', () => {
  let component: DiretivaNgFor2Component;
  let fixture: ComponentFixture<DiretivaNgFor2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiretivaNgFor2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiretivaNgFor2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
