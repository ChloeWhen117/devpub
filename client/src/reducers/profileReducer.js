import { GET_PROFILE, PROFILE_LOADING, CLEAR_CURRENT_PROFILE } from '../actions/types';

const intialState = {
  profile: null,
  profiles: null,
  loading: false
}

export default function(state = intialState, action) {
  switch(action.type) {
    case PROFILE_LOADING:
      return {
        ...state,
        loading: true
      };
    case GET_PROFILE:
      return {
        ...state,
        profile: action.payload,
        loading: false
      };
    case CLEAR_CURRENT_PROFILE:
      return{
        type: CLEAR_CURRENT_PROFILE
      };
    default:
      return state
  }
}