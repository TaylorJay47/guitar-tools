import { TestBed } from '@angular/core/testing';

import { ChordDecoderService } from './chord-decoder.service';

describe('ChordDecoderService', () => {
  let service: ChordDecoderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChordDecoderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
