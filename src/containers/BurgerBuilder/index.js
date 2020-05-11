/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';

import Burguer from '../../components/Burger';
import BuildControls from '../../components/Burger/BuildControls';
import Modal from '../../components/Demand/Modal';
import OrderSummary from '../../components/Burger/OrderSummary';
import Spinner from '../../components/UI/Spinner';
import * as actionTypes from '../../store/actions/index';

const BurguerBuilder = (props) => {
    // HOOKS
    const [purchasing, setPurchasing] = useState(false);
    const [loading, setLoading] = useState(false);

    // REDUX
    const ingredients = useSelector(state => state.burgerReducer.ingredients);
    const total = useSelector(state => state.burgerReducer.totalPrice);
    const isAuth = useSelector(state => state.authReducer.token !== null);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(actionTypes.initIngredients());
    }, []);

    // CONST
    const disabledInfo = {...ingredients}

    for(let key in disabledInfo){
        disabledInfo[key] = disabledInfo[key] <=0;
    }

    /// FUNCTIONS
    const updatePurchaseState = ( allIngredients) => {
        const sum = Object.keys( allIngredients )
            .map( igKey => {
                return allIngredients[igKey];
            } )
            .reduce( ( sum, el ) => {
                return sum + el;
            }, 0 );
        
        return (sum > 0);
    }

    const purchaseHandler = () => {
        if(isAuth){
            setPurchasing(true);
        }else{
            dispatch(actionTypes.setAuthRedirectPath('/checkout'));
            props.history.push('/auth')
        }
    }

    const purchaseCancelHandler = () => {
        setPurchasing(false);
    }

   const purchaseContinueHandler = () => {
        dispatch(actionTypes.purchaseInit());
        props.history.push('/checkout');
   }


    return(
        <>
            <Modal show={purchasing} modalClosed={purchaseCancelHandler}>
            {loading ? <Spinner/> :
            <OrderSummary 
                    ingredients={ingredients} 
                    price={total}
                    purchaseCanceled={purchaseCancelHandler}
                    purchaseContinued={purchaseContinueHandler}
            />}
            </Modal>
            <Burguer ingredients={ingredients}/>
            <BuildControls
                ingredientsAdd={(ingredientName) => dispatch(actionTypes.addIngredients(ingredientName))}
                ingredientsDel={(ingredientName) => dispatch(actionTypes.removeIngredients(ingredientName))}
                disabled={disabledInfo}
                purchasable={updatePurchaseState(ingredients)}
                ordered={purchaseHandler}
                price={total}
                isAuth={isAuth}
            />
        </>
    );
}

export default BurguerBuilder;