import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteAbueloComponent } from './componente-abuelo.component';

describe('ComponenteAbueloComponent', () => {
  let component: ComponenteAbueloComponent;
  let fixture: ComponentFixture<ComponenteAbueloComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponenteAbueloComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponenteAbueloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
