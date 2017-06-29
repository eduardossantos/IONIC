import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PipeDataNumberComponent } from './pipe-data-number.component';

describe('PipeDataNumberComponent', () => {
  let component: PipeDataNumberComponent;
  let fixture: ComponentFixture<PipeDataNumberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PipeDataNumberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PipeDataNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
