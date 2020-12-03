import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AltaAutoComponent } from './alta-auto.component';

describe('AltaAutoComponent', () => {
  let component: AltaAutoComponent;
  let fixture: ComponentFixture<AltaAutoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AltaAutoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AltaAutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
