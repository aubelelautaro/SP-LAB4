import { TestBed } from '@angular/core/testing';

import { AlertMaterialService } from './alert-material.service';

describe('AlertMaterialService', () => {
  let service: AlertMaterialService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlertMaterialService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
