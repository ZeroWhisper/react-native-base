// import Types from "~/constants/types/info";
export const Types = {
  REQUEST: "@login/REQUEST",
  SUCCESS: "@login/SUCCESS",
  FAILURE: "@login/FAILURE"
};

const INITIAL_STATE = {
  loading: false,
  error: false
};

export default function login(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.REQUEST:
      return { ...state };
    case Types.SUCCESS:
      return { ...state };
    case Types.FAILURE:
      return { ...state };
    default:
      return state;
  }
}

export const Creators = {
  loginRequest: payload => ({ type: Types.REQUEST, payload }),
  loginSuccess: payload => ({ type: Types.SUCCESS, payload }),
  loginFailure: payload => ({ type: Types.FAILURE, payload })
};
