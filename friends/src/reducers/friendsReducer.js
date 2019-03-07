import {
  FETCH_FRIENDS_FAIL,
  FETCH_FRIENDS_START,
  FETCH_FRIENDS_SUCCESS
} from "../actions";

const initialState = {
  friends: [],
  error: null,
  isFetching: false
};

export const friendsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_FRIENDS_START:
      return {
        ...state,
        isFetching: true,
        error: ""
      };

    case FETCH_FRIENDS_SUCCESS:
      return {
        ...state,
        friends: payload,
        isFetching: false,
        error: ""
      };

    case FETCH_FRIENDS_FAIL:
      return { ...state, error: payload };

    default:
      return state;
  }
};
