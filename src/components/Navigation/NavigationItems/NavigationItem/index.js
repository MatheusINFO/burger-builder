import React from 'react';
import {NavLink} from 'react-router-dom';

import {LiItem} from './styles';

const NavigationItem = (props) => {
    return(
        <LiItem>
            <NavLink to={props.link} exact={props.exact}>{props.children}
            </NavLink>
        </LiItem>
    );
};

export default NavigationItem;
