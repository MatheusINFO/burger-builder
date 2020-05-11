import {takeEvery, all} from 'redux-saga/effects';

import * as actionTypes from '../actions/actionsTypes';
import {logoutSaga, checkAuthTimeoutSaga, authUserSaga, authCheckStateSaga} from './auth';
import {initialIngredientsSaga} from './burgerBuilder';
import {purchaseBurgerSaga, fetchOrdersSaga} from './order';

// o all pode ser usando quando vários elementos precisam dele

export function* watchAuth(){
    yield all([
        takeEvery(actionTypes.AUTH_START_LOGOUT, logoutSaga),
        takeEvery(actionTypes.AUTH_CHECK_TIMEOUT, checkAuthTimeoutSaga),
        takeEvery(actionTypes.AUTH_USER, authUserSaga),
        takeEvery(actionTypes.AUTH_CHECK_STATE, authCheckStateSaga)
    ])
}

export function* watchBurger(){
    yield takeEvery(actionTypes.INIT_INGREDIENTS, initialIngredientsSaga);
}

export function* watchOrder(){
    yield all([
        takeEvery(actionTypes.PURCHASE_BURGER, purchaseBurgerSaga),
        takeEvery(actionTypes.FETCH_ORDERS, fetchOrdersSaga)
    ])
}