import { all, put, takeEvery } from 'redux-saga/effects';
import { UserRating } from '../algo';
import { GetUserData } from '../api';
import { getUser, getUserSuccess, setError, setRating } from '../slice/user';
import { APIData } from '../type';

export interface SyncAction {
  type: string;
  payload: string;
}

function* setUser({ payload }: SyncAction) {
  try {
    const data: APIData = yield GetUserData(payload);

    if (data.user) {
      const result = new UserRating(data.user, data.repos, data.isStarred).getResult();

      yield put(setRating(result));
      yield put(getUserSuccess(data));
    }
  } catch (err: any) {
    yield put(setError(err.response?.data.message || err.message || 'User Not Found'));
  }
}

// If any of these functions are dispatched, invoke the appropriate saga
function* rootSaga() {
  yield all([takeEvery(getUser.type, setUser)]);
}

export default rootSaga;
