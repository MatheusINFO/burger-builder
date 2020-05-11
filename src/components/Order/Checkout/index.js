import React from 'react';

import {Container} from './styles';

import Burguer from '../../Burger'; 
import {Button} from '../../UI/Button';

const Checkout = (props) => {
    return(
        <Container>
            <h1>Esperamos que você goste :D</h1>
     
            <Burguer ingredients={props.ingredients}/>
       
            <Button 
                style={{fontSize:"14px", margin: "10px auto", marginRight: "10px"}} 
                color="#944317"
                onClick={props.checkoutCancel}>
                CANCELAR
            </Button>

            <Button 
                style={{fontSize:"14px", margin: "10px auto"}}
                color="#5C9210"
                onClick={props.checkoutContinue}>
                CONTINUAR
            </Button>
        </Container>
    );
}

export default Checkout;
