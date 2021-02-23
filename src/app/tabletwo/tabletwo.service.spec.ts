import { TestBed } from '@angular/core/testing';

import { TabletwoService } from './tabletwo.service';

describe('TableService', () => {
  let service: TabletwoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TabletwoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
