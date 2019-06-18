import { TestBed } from '@angular/core/testing';

import { GeoLocService } from './geoloc.service';

describe('GeolocService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GeoLocService = TestBed.get(GeoLocService);
    expect(service).toBeTruthy();
  });
});
