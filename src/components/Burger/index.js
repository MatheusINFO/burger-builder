import React from 'react';

import {Container} from './styles';

import BurguerIngredient from './BurgerIngredient';

const Burguer = (props) => {
    let transformIngredients = Object.keys(props.ingredients).map(igKey => {
        return [...Array(props.ingredients[igKey])].map((_, i) => {
           return <BurguerIngredient key={igKey + i} type={igKey}/>
       }); 
    }).reduce((arr, el) => {
        return arr.concat(el);
    }, []);

    if(transformIngredients.length === 0) {
        transformIngredients = <p>Ei, vamos adicionar alguns ingredientes?</p>
    }

    return(
        <Container>
            <BurguerIngredient type="bread-top"/>
            {transformIngredients}
            <BurguerIngredient type="bread-bottom"/>
        </Container>
    );
}

export default Burguer;