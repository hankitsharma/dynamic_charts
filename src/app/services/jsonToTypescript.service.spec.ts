/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { JsonToTypescriptService } from './jsonToTypescript.service';

describe('Service: JsonToTypescript', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [JsonToTypescriptService]
    });
  });

  it('should ...', inject([JsonToTypescriptService], (service: JsonToTypescriptService) => {
    expect(service).toBeTruthy();
  }));
});
