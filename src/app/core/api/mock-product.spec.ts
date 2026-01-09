import { TestBed } from '@angular/core/testing';

import { MockProduct } from './mock-product';

describe('MockProduct', () => {
  let service: MockProduct;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MockProduct);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
