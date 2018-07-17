import { TestBed, inject } from '@angular/core/testing';

import { RepoResolverService } from './repo-resolver.service';

describe('RepoResolverService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RepoResolverService]
    });
  });

  it('should be created', inject([RepoResolverService], (service: RepoResolverService) => {
    expect(service).toBeTruthy();
  }));
});
