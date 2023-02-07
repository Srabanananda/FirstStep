import {put, call, takeEvery} from 'redux-saga/effects';
import {LOGIN_REQUEST,LOGIN_SUCCESS,LOGIN_FAILED} from '../types';
import Api from '../../Config/Api';

export function* FetchLogin({params}) {
  try {
    const response = yield call(Api.Login, params);
    yield put({type: LOGIN_SUCCESS, payload: response});
  } catch (e) {
    yield put({type: LOGIN_FAILED, payload: e});
  }
}

export function*  LoginSaga() {
  yield takeEvery(LOGIN_REQUEST, FetchLogin);
}
export default LoginSaga;
