import { RepoPageModule } from './repo-page.module';

describe('RepoPageModule', () => {
  let repoPageModule: RepoPageModule;

  beforeEach(() => {
    repoPageModule = new RepoPageModule();
  });

  it('should create an instance', () => {
    expect(repoPageModule).toBeTruthy();
  });
});
