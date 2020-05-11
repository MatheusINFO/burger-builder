/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import Order from '../../components/Order';
import * as actionTypes from '../../store/actions/index';

const Orders = () => {
    //REDUX
    const orders = useSelector(state => state.orderReducer.orders);
    const token = useSelector(state => state.authReducer.token);
    const userId = useSelector(state => state.authReducer.userId);
    const dispatch = useDispatch();

    useEffect(() => {       
        console.log(token)
        dispatch(actionTypes.fetchOrders(token, userId));
    }, []);

    return(
        <>
            {orders.map(order => (
                <Order key={order.id} ingredients={order.ingredients} price={+order.price}/>
            ))}
        </>
    );
}

export default Orders;