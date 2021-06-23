import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleFormComponent } from './detalle-form.component';

describe('DetalleFormComponent', () => {
  let component: DetalleFormComponent;
  let fixture: ComponentFixture<DetalleFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalleFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
