import React from "react";

import {Header, Nav} from './styles'

import Logo from '../../../assets/original.png';
import NavigationItems from '../NavigationItems';
import DrawerToggle from '../SideDrawer/DrawerToggle';

const Toolbar = (props) => {
    return(
        <Header>
            <DrawerToggle clicked={props.drawerToggleClicked}/>
            <img src={Logo} alt="Hambuger"/>
            <Nav>
                <NavigationItems isAuthenticated={props.isAuth}/>
            </Nav>
        </Header>
    );
}

export default Toolbar;