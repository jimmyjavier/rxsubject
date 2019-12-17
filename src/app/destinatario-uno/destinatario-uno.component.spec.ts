import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DestinatarioUnoComponent } from './destinatario-uno.component';

describe('DestinatarioUnoComponent', () => {
  let component: DestinatarioUnoComponent;
  let fixture: ComponentFixture<DestinatarioUnoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DestinatarioUnoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DestinatarioUnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
