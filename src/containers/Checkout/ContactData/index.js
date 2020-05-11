/* eslint-disable no-unused-vars */
import React, {useState} from 'react';
import {Container} from './styles';
import {useSelector, useDispatch} from 'react-redux';

import Input from '../../../components/UI/Input';
import {Button} from '../../../components/UI/Button';
import * as actionsTypes from '../../../store/actions/index';
import {checkValidity} from '../../../shared/utility';


const ContactData = (props) => {
    // HOOKS
    const [orderForm, setOrderForm] = useState({
        name: {
            elementType: 'input',
            elementConfig: {
                type: 'text',
                placeholder: 'Seu nome'
            },
            value: '',
            validation: {
                required: true
            },
            valid: false,
            touched: false
        },
        street: {
            elementType: 'input',
            elementConfig: {
                type: 'text',
                placeholder: 'Sua rua'
            },
            value: '',
            validation: {
                required: true
            },
            valid: false,
            touched: false
        },
        zipCode: {
            elementType: 'input',
            elementConfig: {
                type: 'text',
                placeholder: 'Código postal'
            },
            value: '',
            validation: {
                required: true,
                minLength: 5,
                maxLength: 8,
                isNumeric: true
            },
            valid: false,
            touched: false
        },
        country: {
            elementType: 'input',
            elementConfig: {
                type: 'text',
                placeholder: 'Cidade'
            },
            value: '',
            validation: {
                required: true
            },
            valid: false,
            touched: false
        },
        email: {
            elementType: 'input',
            elementConfig: {
                type: 'email',
                placeholder: 'Seu e-mail'
            },
            value: '',
            validation: {
                required: true
            },
            valid: false,
            touched: false
        },
        deliveryMethod: {
            elementType: 'select',
            elementConfig: {
                options: [
                    {value: 'ifood', displayValue: 'iFood'},
                    {value: 'happi', displayValue: 'Happi'},
                    {value: 'uber', displayValue: 'Uber eats'},
                    {value: 'retirar', displayValue: 'Retirar no local'},
                ]
            },
            value: 'ifood',
            validation: {},
            valid: true
        }
    });
    const [loading, setLoading] = useState(false);
    const [formIsValid, setFormIsValid] = useState(false);
    const dispatch = useDispatch();

    //REDUX
    const ingredients = useSelector(state => state.burgerReducer.ingredients);
    const price = useSelector(state => state.burgerReducer.totalPrice);
    const token = useSelector(state => state.authReducer.token);
    const userId = useSelector(state => state.authReducer.userId);

    
    // VARIAVÉIS
    const formElementsArray = [];

    for(let key in orderForm){
        formElementsArray.push({
            id: key,
            config: orderForm[key]
        })
    }

    // FUNCTIONS
    const orderHandler = (event) => {
        event.preventDefault();
        setLoading(true);

        const formData = {};

        for(let element in orderForm){
            formData[element] = orderForm[element].value;
        }

        const order = {
            ingredients: ingredients,
            price: price,
            orderData: formData,
            userId
        }

        dispatch(actionsTypes.purchaseBurger(order, token));
    }

    const inputChangedHandler = (event, inputIdentifier) => {
        const updatedOrderForm = {
            ...orderForm
        }
        const updatedFormElement = {...updatedOrderForm[inputIdentifier]};
        
        updatedFormElement.value = event.target.value;
        updatedFormElement.valid = checkValidity(updatedFormElement.value, updatedFormElement.validation);
        updatedFormElement.touched = true;
        updatedOrderForm[inputIdentifier] = updatedFormElement;

        let formValid = true;
        for(let inputIdentifier in updatedOrderForm){
            formValid = updatedOrderForm[inputIdentifier].valid && formValid;
        }

        setFormIsValid(formValid);
        setOrderForm(updatedOrderForm);
    }

    return(
        <Container>
            <h4>Entre com seus dados de contato: </h4>
            <form onSubmit={orderHandler}>
                {formElementsArray.map(formElement => {
                    return(
                        <Input 
                            invalid = {!formElement.config.valid}
                            key={formElement.id}
                            elementType={formElement.config.elementType} 
                            elementConfig={formElement.config.elementConfig}
                            value={formElement.config.value}
                            changed={(event) => inputChangedHandler(event, formElement.id)}
                        />
                    )
                })}
                <Button color="#5C9210" disable={!formIsValid}>Pedir</Button>
            </form>
        </Container>
    );
}

export default ContactData;
