import { TestBed, inject } from '@angular/core/testing';
import { ResolvingLocationService } from './resolving-location.service';

describe('ResolvingLocationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ResolvingLocationService]
    });
  });

  it('should ...', inject([ResolvingLocationService], (service: ResolvingLocationService) => {
    expect(service).toBeTruthy();
  }));
});
