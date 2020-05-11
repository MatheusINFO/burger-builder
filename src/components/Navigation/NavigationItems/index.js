import React from 'react';

import {UlList} from './styles';
import NavigationItem from './NavigationItem';

const NavigationItens = (props) => {
    return(
        <UlList>
            <NavigationItem link="/" exact>
                Burguer
            </NavigationItem>

            {props.isAuthenticated ? 
            <NavigationItem link="/orders">Pedidos</NavigationItem>
            : null
            }
            
            {!props.isAuthenticated ? 
             <NavigationItem link="/auth">Entrar</NavigationItem>
             : 
             <NavigationItem link="/logout">Sair</NavigationItem>
            }
        </UlList>
    );
};

export default NavigationItens;

