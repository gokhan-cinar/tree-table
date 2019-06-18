import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let httpTestingController: HttpTestingController;
  let service: AppComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AppComponent],
      imports: [HttpClientTestingModule]
    });

    httpTestingController = TestBed.get(HttpTestingController);
    service = TestBed.get(AppComponent);
  });

  afterEach(() => {
    httpTestingController.verify();
  }); 
  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
