import {Action} from '@ngrx/store';

export const REPOSITORIES_REQUEST = '[Auth] Attempt to get user\'s repository';
export const REPOSITORIES_REQUEST_FAILED = '[Auth] Cannot get user\'s repository';
export const COMMITS_REQUEST = '[Auth] Attempt to get commits for repository';
export const COMMITS_REQUEST_FAILED = '[Auth] Cannot get commits for repository';


export class RepositoryRequestAction implements Action {
  public readonly type = REPOSITORIES_REQUEST;
}

export class RepositoryRequestFailedAction implements Action {
  public readonly type = REPOSITORIES_REQUEST_FAILED;

  constructor(public payload: { message?: string }) {
  }
}

export class CommitsRequestAction implements Action {
  public readonly type = COMMITS_REQUEST;
}

export class CommitsRequestFailedAction implements Action {
  public readonly type = COMMITS_REQUEST_FAILED;

  constructor(public payload: { message?: string }) {
  }
}

export type Actions
  = RepositoryRequestAction
  | RepositoryRequestFailedAction
  | CommitsRequestAction
  | CommitsRequestFailedAction;
