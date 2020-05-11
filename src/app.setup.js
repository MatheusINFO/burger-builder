/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';

import { ToastContainer } from "react-toastify";
import GlobalStyle from './styles/global';
import Layout from './containers/Layout';
import Routes from './routes';

import * as actionTypes from './store/actions/index';

const AppSetup = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actionTypes.authCheckState());
  }, []);

  return (
    <>
        <GlobalStyle/>
        <ToastContainer autoClose={3000} />
        <Layout>
          <Routes/>
        </Layout>
    </>
  );
}

export default AppSetup;
