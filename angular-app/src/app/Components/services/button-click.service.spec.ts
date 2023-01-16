import { TestBed } from '@angular/core/testing';

import { ButtonClickService } from './button-click.service';

describe('ButtonClickService', () => {
  let service: ButtonClickService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ButtonClickService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
