import { TestBed } from '@angular/core/testing';

import { AutGuardGuardService } from './aut-guard.guard.service';

describe('AutGuardGuardService', () => {
  let service: AutGuardGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AutGuardGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
