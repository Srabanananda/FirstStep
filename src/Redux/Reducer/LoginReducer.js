import {LOGIN_FAILED,LOGIN_SUCCESS} from '../types';
const INITIAL_STATE = {}

export default (state = INITIAL_STATE,action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {loginSuccess: true, data: action.payload};

    case LOGIN_FAILED:
      return {loginSuccess: false, error: action.payload};

    default:
      return state;
  }
};
