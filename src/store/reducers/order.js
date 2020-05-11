import * as actionTypes from '../actions/actionsTypes';
import {updatedObject} from '../../shared/utility';

// INITIAL STATE
const initialState = {
    orders: [],
    purchased: false
}


// FUNCTIONS
const purchasedSucess = (state, action) => {
    const newOrder = {
        ...action.orderData,
        id: action.orderId
    }
    return updatedObject(state, {
        orders: state.orders.concat(newOrder),
        purchased: true
    })
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.PURCHASE_INIT:  return updatedObject( state, { purchased: false });
        case actionTypes.PURCHASE_BURGER_START: return updatedObject(state, null);
        case actionTypes.PURCHASE_BURGER_SUCESS: return purchasedSucess(state, action);
        case actionTypes.PURCHASE_BURGER_FAIL: return updatedObject(state, null);
        case actionTypes.FETCH_ORDERS_START: return updatedObject(state, null);
        case actionTypes.FETCH_ORDERS_SUCESS: return updatedObject(state, {orders: action.orders});
        case actionTypes.FETCH_ORDERS_FAILURE: return updatedObject(state, null);
        default:
            return state;
    } 
}

export default reducer;