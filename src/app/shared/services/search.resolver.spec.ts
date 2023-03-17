import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { SearchResolver } from './search.resolver';

describe('SearchResolver', () => {
  let resolver: SearchResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]
    });
    resolver = TestBed.inject(SearchResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
