import {put} from 'redux-saga/effects';
import {toast} from 'react-toastify';

import axios from '../../services/api';
import * as actions from '../actions/index';

export function* purchaseBurgerSaga(action){
    yield put (actions.purchaseBurgerStart());

    try {
        const response = yield axios.post('/orders.json?auth=' + action.token, action.orderData);
        yield put(actions.purchaseBurgerSucess(response.data.name, action.orderData));
        toast.success("Pedido realizado com sucesso");
    } catch (error) {
        yield put(actions.purchaseBurgerFail(error));
        toast.error("Algo deu errado, tente novamente!");
    }
}

export function* fetchOrdersSaga(action){
    yield put(actions.fetchOrdersStart());
        
    const queryParams = '?auth=' + action.token + '&orderBy="userId"&equalTo="' + action.userId + '"';

    try {
        const response = yield axios.get('/orders.json' + queryParams);

        const fetchedOrders = [];
            
        for(let key in response.data){
            fetchedOrders.push({
                ...response.data[key],
                id: key
            });
        }
        yield put(actions.fetchOrdersSucess(fetchedOrders));
    } catch (error) {
        yield put(actions.fetchOrdersFail(error));
    }
}