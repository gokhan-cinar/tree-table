import { TestBed } from '@angular/core/testing';

import { DataJsonService } from './data-json.service';

describe('DataJsonService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DataJsonService = TestBed.get(DataJsonService);
    expect(service).toBeTruthy();
  });
});
