import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {FaSpinner} from 'react-icons/fa';
import {Redirect} from 'react-router-dom';

import Input from '../../components/UI/Input';
import {Button} from '../../components/UI/Button';
import { Container, Form, WrapperButton } from './styles';
import * as actionTypes from '../../store/actions/index';
import {checkValidity} from '../../shared/utility';

const Auth = () => {
    // HOOKS
    const [isSignup, setSignUp] = useState(true);
    const [controls, setControls] = useState({
        email: {
            elementType: 'input',
            elementConfig: {
                type: 'email',
                placeholder: 'Seu e-mail'
            },
            value: '',
            validation: {
                required: true,
                isEmail: true
            },
            valid: false,
            touched: false
        },
        password: {
            elementType: 'input',
            elementConfig: {
                type: 'password',
                placeholder: 'Sua senha'
            },
            value: '',
            validation: {
                required: true,
                minLength: 6
            },
            valid: false,
            touched: false
        }
    });

    // REDUX
    const loading = useSelector(state => state.authReducer.loading);
    const isAuth = useSelector(state => state.authReducer.token !== null);
    const buildingBurger = useSelector(state => state.burgerReducer.building);
    const authRedirectPath = useSelector(state => state.authReducer.authRedirectPath);
    const dispatch = useDispatch();

    
    useEffect(() => {
        if(!buildingBurger && authRedirectPath !== "/"){
            dispatch(actionTypes.setAuthRedirectPath('/'));
        }
    })

    // Functions
    const formElementsArray = [];

    for(let key in controls){
        formElementsArray.push({
            id: key,
            config: controls[key]
        })
    }
    
    const submitHandler = (event) => {
        event.preventDefault();

        dispatch(actionTypes.auth(controls.email.value, controls.password.value, isSignup));
    }

    const inputChangedHandler = (event, controlName) => {
        const updatedControls ={
            ...controls,
            [controlName]: {
                ...controls[controlName],
                value: event.target.value,
                valid: checkValidity(event.target.value, controls[controlName].validation),
                touched: true
            }
        }

        setControls(updatedControls);
    }

    const form = formElementsArray.map(formElement => (
            <Input 
            invalid = {!formElement.config.valid}
            key={formElement.id}
            elementType={formElement.config.elementType} 
            elementConfig={formElement.config.elementConfig}
            value={formElement.config.value}
            changed={(event) => inputChangedHandler(event, formElement.id)}
            />
    ))

    // Let
    let authRedirect = null;

    if(isAuth){
        authRedirect = <Redirect to={authRedirectPath} />
    }

    return( 
        <Container>
            {authRedirect}
            <Form onSubmit={submitHandler}>
                {form}
                <WrapperButton>
                    <Button color="#5C9210" onClick={() => {setSignUp(false)}}>Acessar conta</Button>
                    <Button color="#fff">{loading ? <FaSpinner color="#944317" size="40px"/> : null}</Button>
                    <Button color="#5C9210" onClick={() => {setSignUp(true)}}>Cadastrar</Button>
                </WrapperButton>
            </Form>

        </Container>
    );
}

export default Auth;