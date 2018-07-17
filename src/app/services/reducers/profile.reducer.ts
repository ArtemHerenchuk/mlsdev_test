import {merge} from 'ramda';
import * as ProfileActions from '../actions/profile.actions';

const initialState = {
  startedRequest: false,
  profileRequestComplete: false
};

export function profileReducer(authState: GithubApp.Store.ProfileRequest = initialState, action: ProfileActions.Actions) {
  switch (action.type) {
    case ProfileActions.PROFILE_REQUEST: {
      return merge(authState, {startedRequest: true, error: undefined});
    }
    case ProfileActions.PROFILE_REQUEST_FAILED: {
      const error = action.payload;
      return merge(authState, {startedRequest: false, error});
    }
  }
}
