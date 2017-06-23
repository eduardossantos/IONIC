import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateModeloComponent } from './template-modelo.component';

describe('TemplateModeloComponent', () => {
  let component: TemplateModeloComponent;
  let fixture: ComponentFixture<TemplateModeloComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplateModeloComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateModeloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
