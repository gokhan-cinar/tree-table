import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { TreeTableComponent } from './tree-table.component';

describe('TreeTableComponent', () => {
  let httpTestingController: HttpTestingController;
  let service: TreeTableComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TreeTableComponent],
      imports: [HttpClientTestingModule]
    });

    httpTestingController = TestBed.get(HttpTestingController);
    service = TestBed.get(TreeTableComponent);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
