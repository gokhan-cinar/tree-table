import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { DataJsonService } from './data-json.service';

describe('DataJsonService', () => {
  let httpTestingController: HttpTestingController;
  let service: DataJsonService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DataJsonService],
      imports: [HttpClientTestingModule]
    });

    httpTestingController = TestBed.get(HttpTestingController);
    service = TestBed.get(DataJsonService);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
