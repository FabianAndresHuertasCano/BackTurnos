import { TestBed } from '@angular/core/testing';

import { BackTurnosService } from './back-turnos.service';

describe('BackTurnosService', () => {
  let service: BackTurnosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BackTurnosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
