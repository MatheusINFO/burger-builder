import React from 'react';

import {Container} from "./styles";

const Order = (props) => {
    const burguer = [];

    for(let ingredientName in props.ingredients){
        switch(ingredientName){
            case "cheese":
                burguer.push({name: "Queijo", amount: props.ingredients[ingredientName]})
                break;
            case "meat":
                 burguer.push({name: "Carne", amount: props.ingredients[ingredientName]})
                 break;
            case "salad":
                 burguer.push({name: "Salada", amount: props.ingredients[ingredientName]})
                 break;
            case "bacon":
                 burguer.push({name: "Bacon", amount: props.ingredients[ingredientName]})
                 break;
            default:
                burguer.push({name: ingredientName, amount: props.ingredients[ingredientName]})
        }
    }

    const ingredientsOutput = burguer.map(ig => {
        return <span key={ig.name}>{ig.name} ({ig.amount})</span>
    })

    return(
        <Container>
            <p>Ingredientes: {ingredientsOutput}</p>
            <p>Preço: <strong>R$ {props.price.toFixed(2).replace(".", ",")}</strong></p>
        </Container>
    )
}

export default Order;