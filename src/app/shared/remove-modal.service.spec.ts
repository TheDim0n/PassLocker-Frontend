import { TestBed } from '@angular/core/testing';

import { RemoveModalService } from './remove-modal.service';

describe('RemoveModalService', () => {
  let service: RemoveModalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RemoveModalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
