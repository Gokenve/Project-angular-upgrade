import { TestBed } from '@angular/core/testing';

import { ApiListsService } from './api-lists.service';

describe('ApiListsService', () => {
  let service: ApiListsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiListsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
