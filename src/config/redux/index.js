import { bindActionCreators } from "redux";

export function getMapStateToProps(field) {
  return state => state[field];
}

export function getMapDispatchToProps(actions) {
  return dispatch => bindActionCreators({ ...actions }, dispatch);
}
