import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import {useSelector} from 'react-redux';

import Order from '../../components/Order/Checkout';
import DadosPessoais from './ContactData';

const Checkout = (props) => {
    //REDUX
    const ingredients = useSelector(state => state.burgerReducer.ingredients);
    const purchased = useSelector(state => state.orderReducer.purchased);

    // FUNCTIONS
    const checkoutCancelHandler = () => {
        props.history.goBack();
    }

    const checkoutContinueHandler = () => {
        props.history.replace('/checkout/contact-data');
    }

    const purchasedRedirect = purchased ? <Redirect to="/"/> : null;

    return(
        <>
            {purchasedRedirect}
            <Order ingredients={ingredients} checkoutCancel={checkoutCancelHandler} checkoutContinue={checkoutContinueHandler}/>
            <Route path={props.match.path + '/contact-data'} component={DadosPessoais} />
        </>
    )
};

export default Checkout;