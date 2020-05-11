import * as actionTypes from '../actions/actionsTypes';

import {updatedObject} from '../../shared/utility';

// INITIAL STATES
const initialState = {
    ingredients: 0,
    totalPrice: 4,
    building: false
};

const INGRIDIENT_PRICES = {
    salad: 1.0,
    cheese: 1.5,
    meat: 3.0,
    bacon: 2.0,
}


// FUNCTIONS
const addIngredient = (state, action) => {
    const addIngredient = {[action.ingredientName]: state.ingredients[action.ingredientName] + 1};
    const addIngredients = updatedObject(state.ingredients, addIngredient);
    const addStateIngredients = {
         ingredients: addIngredients,
         totalPrice: state.totalPrice + INGRIDIENT_PRICES[action.ingredientName],
         building: true
    }
    return updatedObject(state, addStateIngredients);
}

const delIngredient = (state, action) => {
    const delIngredient = {[action.ingredientName]: state.ingredients[action.ingredientName] - 1};
    const delIngredients = updatedObject(state.ingredients, delIngredient);
    const deleteStateIngredients = {
        ingredients: delIngredients,
        totalPrice: state.totalPrice - INGRIDIENT_PRICES[action.ingredientName],
        building: true
    }
    return updatedObject(state, deleteStateIngredients);
}

const setIngredients = (state, action) => {
    return updatedObject(state, {
        ingredients: {
            salad: action.ingredients.salad,
            bacon: action.ingredients.bacon,
            cheese: action.ingredients.cheese,
            meat: action.ingredients.meat
        },
        error: false,
        totalPrice: 4,
        building: false
    }); 
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.ADD_INGREDIENT: return addIngredient(state, action);
        case actionTypes.REMOVE_INGREDIENT: return delIngredient(state, action);
        case actionTypes.SET_INGREDIENTS: return setIngredients(state, action);
        default: return state;
    }
}

export default reducer;