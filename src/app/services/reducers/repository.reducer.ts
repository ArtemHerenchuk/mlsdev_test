import {merge} from 'ramda';
import * as RepositoryActions from '../actions/repository.actions';

const initialState = {
  startedRequest: false,
  repositoryRequestComplete: false
};

export function repositoryReducer(authState: GithubApp.Store.RepositoryRequest = initialState, action: RepositoryActions.Actions) {
  switch (action.type) {
    case RepositoryActions.REPOSITORIES_REQUEST:
    case RepositoryActions.COMMITS_REQUEST: {
      return merge(authState, {startedRequest: true, error: undefined});
    }
    case RepositoryActions.REPOSITORIES_REQUEST_FAILED:
    case RepositoryActions.COMMITS_REQUEST_FAILED: {
      const error = action.payload;
      return merge(authState, {startedRequest: false, error});
    }
  }
}
