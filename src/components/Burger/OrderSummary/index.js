import React from 'react';

import {Container, WrapperButton} from './styles';
import {Button} from '../../UI/Button';

const Order = (props) => {
    const itens = ["Salada", "Bacon", "Queijo", "Carne"];

    const ingredientsSummary = Object.keys(props.ingredients)
            .map((igKey , id)=> {
                return (
                    <li key={id}>
                        <span style={{textTransform: 'capitalize'}}>
                        {itens[id]}
                        :</span>
                        &nbsp;
                        {props.ingredients[igKey]}
                    </li>
                )
            });

    // Convertendo preço
    const preco = props.price.toFixed(2);
    const newPreco = preco.toString().replace(".", ",");

    return(
        <Container>
            <h3>Seus pedidos</h3>
            <p>Hambuguer com os seguintes ingredientes:</p>
            <ul>
                {ingredientsSummary}
            </ul>
            <strong>Confirmar pedido?</strong>
            <p style={{textAlign: "center"}}>Total: R${newPreco}</p>

            <WrapperButton>
                <Button color={"#944317"} onClick={props.purchaseCanceled}>Cancelar</Button> 
                <Button color={"#5C9210"} onClick={props.purchaseContinued}>Continuar</Button>
            </WrapperButton>
        </Container>
    );
}

export default Order;