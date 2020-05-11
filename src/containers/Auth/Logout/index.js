import React, {useEffect} from 'react';
import {Redirect} from 'react-router-dom';
import {useDispatch} from 'react-redux';

import * as actionTypes from '../../../store/actions/index';

const Logout = () => {
    // REDUX
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(actionTypes.logout());
    })
    
    return <Redirect to="/"/>
}

export default Logout;