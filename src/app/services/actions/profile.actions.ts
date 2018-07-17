import {Action} from '@ngrx/store';

export const PROFILE_REQUEST = '[Auth] Attempt to get user profile';
export const PROFILE_REQUEST_FAILED = '[Auth] Cannot get user';


export class ProfileRequestAction implements Action {
  public readonly type = PROFILE_REQUEST;
}

export class ProfileRequestFailedAction implements Action {
  public readonly type = PROFILE_REQUEST_FAILED;

  constructor(public payload: { message?: string }) {
  }
}

export type Actions = ProfileRequestAction | ProfileRequestFailedAction;
