import * as actionTypes from './actionsTypes';

export const authStart = () => {
    return{
        type: actionTypes.AUTH_START
    }
}

export const authSucess = (token, userId) => {
    return{
        type: actionTypes.AUTH_SUCESS,
        token, 
        userId
    }
}

export const authFail = (error) => {
    return{
        type: actionTypes.AUTH_FAIL,
        error
    }
}

export const logout = () => {
    return{
        type: actionTypes.AUTH_START_LOGOUT
    }
}

export const logoutSucceed = () => {
    return {
        type: actionTypes.AUTH_LOGOUT
    }
}

export const checkAuthTimeout = (expirationTime) => {
    return {
        type: actionTypes.AUTH_CHECK_TIMEOUT,
        expirationTime
    }
}

export const auth = (email, password, isSignup) => {
    return {
        type: actionTypes.AUTH_USER,
        email,
        password,
        isSignup
    }
};

export const setAuthRedirectPath = (path) => {
    return{
        type: actionTypes.SET_AUTH_REDIRECT_PATH,
        path
    }
}

export const authCheckState = () => {
    return{
        type: actionTypes.AUTH_CHECK_STATE
    }
}