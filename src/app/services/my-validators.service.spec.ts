import { TestBed } from '@angular/core/testing';

import { MyValidatorsService } from './my-validators.service';

describe('MyValidatorsService', () => {
  let service: MyValidatorsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyValidatorsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
