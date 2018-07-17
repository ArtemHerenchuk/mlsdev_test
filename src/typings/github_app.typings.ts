declare namespace GithubApp {
  namespace Profiles {
    interface ShortProfile {
      id?: number;
      name?: string;
      email?: string;
      login: string;
      avatar_url: string;
      slug: string;
    }

    interface Profile {
      user: ShortProfile;
      repositories: Repositories.ShortRepository[];
    }
  }

  namespace Repositories {
    interface ShortRepository {
      name: string;
      owner: string;
    }

    interface Repository {
      repository: ShortRepository;
      forks: Fork[];
    }

    interface Fork {
      name: string;
      link: string;
    }

    interface Commit {
      name: string;
      link: string;
    }
  }

  namespace Store {
    interface ProfileRequest {
      startedRequest: boolean;
      profileRequestComplete: boolean;
      user?: Profiles.Profile;
      error?: string;
    }

    interface RepositoryRequest {
      startedRequest: boolean;
      repositoryRequestComplete: boolean;
      repository?: Profiles.Profile;
      error?: string;
    }
  }

  interface LoaderState {
    show: boolean;
  }
}
