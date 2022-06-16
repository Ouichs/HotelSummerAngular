import { TestBed } from '@angular/core/testing';

import { UsersRestApiService } from './users-rest-api.service';

describe('UsersRestApiService', () => {
  let service: UsersRestApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsersRestApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
