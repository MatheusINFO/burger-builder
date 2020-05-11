import {put} from 'redux-saga/effects';
import {toast} from 'react-toastify';

import axios from '../../services/api';
import * as actions from '../actions/index'; 

export function* initialIngredientsSaga(){

    try {
        const response = yield axios.get( 'https://burguerbuilder-cb5f6.firebaseio.com/ingredients.json');
        yield put(actions.setIngredients(response.data));
    } catch (error) {
        toast.error("Ops, algo deu errado na importação!" + error)
    }
}