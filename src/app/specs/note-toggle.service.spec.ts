import { TestBed } from '@angular/core/testing';

import { NoteToggleService } from '../services/note-toggle.service';

describe('NoteToggleService', () => {
  let service: NoteToggleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NoteToggleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
