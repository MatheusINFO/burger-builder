import React from 'react';

import {Container, Button} from './styles';

import Control from './Control';

const BuildControls = (props) => {
    const controls = [
        {label: 'Salada', type: 'salad'},
        {label: 'Bacon', type: 'bacon'},
        {label: 'Queijo', type: 'cheese'},
        {label: 'Carne', type: 'meat'},
    ];

    const preco = props.price.toFixed(2);
    const newPreco = preco.toString().replace(".", ",");

    return(
        <Container> 
            <p>Total: R$ {newPreco}</p>
            {controls.map(ctrl => {
                return <Control 
                    key={ctrl.label} 
                    label={ctrl.label} 
                    add={() => props.ingredientsAdd(ctrl.type)}
                    del={() => props.ingredientsDel(ctrl.type)}
                    disabled={props.disabled[ctrl.type]}
                 />
            })}

            <Button disabled={!props.purchasable} onClick={props.ordered}>
                {props.isAuth ? 'Finalizar Pedido' : 'Entrar para pedir'}
            </Button>
        </Container>
    );
}

export default BuildControls;