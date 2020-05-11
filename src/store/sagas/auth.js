import {put, delay, call} from 'redux-saga/effects';
import axios from 'axios';
import {toast} from 'react-toastify';

import * as actions from '../actions/index';

export function* logoutSaga(){
    yield call([localStorage, "removeItem"], "token");
    yield call([localStorage, "removeItem"], "expirationTime");
    yield call([localStorage, "removeItem"], "userId");

    //  É POSSÍVEL USAR DE AMBOS OS JEITOS, PORÉM COM O CALL FICA MAIS FÁCIL PARA TESTES!

    // yield localStorage.removeItem('token');
    // yield localStorage.removeItem('expirationTime');
    // yield localStorage.removeItem('userId');

    yield put(actions.logoutSucceed())
}

export function* checkAuthTimeoutSaga(action){
    yield delay(action.expirationTime * 1000);
    yield put(actions.logout())
}

export function* authUserSaga(action){
    yield put(actions.authStart());

    const authData = {
        email: action.email,
        password: action.password,
        returnSecureToken: true
    };

    let url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=' + process.env.REACT_APP_KEY;

    if(!action.isSignup){
        url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=' + process.env.REACT_APP_KEY;
    }

    try{
        const response = yield axios.post(url, authData)
        const expirationDate = yield new Date(new Date().getTime() + response.data.expiresIn * 1000);
        yield localStorage.setItem('token', response.data.idToken);
        yield localStorage.setItem('expirationDate', expirationDate);
        yield localStorage.setItem('userId', response.data.localId);

        yield put(actions.authSucess(response.data.idToken, response.data.localId));
        yield put(actions.checkAuthTimeout(response.data.expiresIn));
    }catch(error){
        toast.error(error.response.data.error.message);
        yield put(actions.authFail(error.response.data.error.message));
    }
}

export function* authCheckStateSaga(action){
    const token = yield localStorage.getItem('token');
        
    if(!token){
        yield put(actions.logout());
    }else{
        const expirationDate = yield new Date(localStorage.getItem('expirationDate'));

        if(expirationDate <= new Date()){
            yield put(actions.logout());
        }else{
            const userId = yield localStorage.getItem('userId');
            yield put(actions.authSucess(token, userId));
            yield put(actions.checkAuthTimeout((expirationDate.getTime() - new Date().getTime()) / 1000 ));
        }

    }
}