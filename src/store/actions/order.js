import * as actionTypes from './actionsTypes';

export const purchaseBurgerSucess = (id, orderData) => {
    return{
        type: actionTypes.PURCHASE_BURGER_SUCESS,
        orderID: id,
        orderData
    }
}

export const purchaseBurgerFail = (error) => {
    return{
        type: actionTypes.PURCHASE_BURGER_FAIL,
        error
    }
}

export const purchaseBurgerStart = () => {
    return{
        type: actionTypes.PURCHASE_BURGER_START
    }
}

export const purchaseBurger = (orderData, token) => {
    return{
        type: actionTypes.PURCHASE_BURGER,
        orderData,
        token
    }
}

export const purchaseInit = () => {
    return{
        type: actionTypes.PURCHASE_INIT
    }
}

export const fetchOrdersSucess = (orders) => {
    return{
        type: actionTypes.FETCH_ORDERS_SUCESS,
        orders
    }
}

export const fetchOrdersFail = (error) => {
    return{
        type: actionTypes.FETCH_ORDERS_FAILURE,
        error
    }
}

export const fetchOrdersStart = () => {
    return{
        type: actionTypes.FETCH_ORDERS_START
    }
}

export const fetchOrders = (token, userId) => {
    return{
        type: actionTypes.FETCH_ORDERS,
        token,
        userId
    }
}