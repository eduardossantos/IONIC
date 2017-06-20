import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgswitchDiretivaComponent } from './ngswitch-diretiva.component';

describe('NgswitchDiretivaComponent', () => {
  let component: NgswitchDiretivaComponent;
  let fixture: ComponentFixture<NgswitchDiretivaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgswitchDiretivaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgswitchDiretivaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
