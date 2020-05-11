import React from 'react';

import {Container} from './styles';

import Logo from '../../../assets/original.png';
import NavigationItems from '../NavigationItems';
import Backdrop from '../../Demand/Backdrop';

const SideDrawer = props => {
    return(
        <>
            <Backdrop show={props.open} clicked={props.closed}/>
            <Container on={props.open}>
                <img src={Logo} alt="Hambuguer"/>
                <nav>
                    <NavigationItems isAuthenticated={props.isAuth}/>
                </nav>
            </Container>
        </>
    );
}

export default SideDrawer;