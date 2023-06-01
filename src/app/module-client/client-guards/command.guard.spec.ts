import { TestBed } from '@angular/core/testing';

import { CommandGuard } from './command.guard';

describe('CommandGuard', () => {
  let guard: CommandGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CommandGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
