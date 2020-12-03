import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BajaAutoComponent } from './baja-auto.component';

describe('BajaAutoComponent', () => {
  let component: BajaAutoComponent;
  let fixture: ComponentFixture<BajaAutoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BajaAutoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BajaAutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
