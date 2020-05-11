import React, {useState} from 'react';
import {useSelector} from 'react-redux';

import {Container} from './styles';

import Toolbar from '../../components/Navigation/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer';

const Layout = (props) => {
    // HOOKS
    const [showSide,setShowSide] = useState(false);
 
    const sideDrawerClosedHandler = () => {
        setShowSide(false);
    }

    const sideDrawerToggleHandler = () => {
        setShowSide(!showSide);
    }
    
    // REDUX
    const isAuthenticated = useSelector(state => state.authReducer.token !== null);

   return(
        <Container>
            <Toolbar isAuth={isAuthenticated} drawerToggleClicked={sideDrawerToggleHandler}/>
            <SideDrawer isAuth={isAuthenticated} open={showSide} closed={sideDrawerClosedHandler}/>
            <main>
                {props.children}
            </main>
        </Container>
   );
};

export default Layout;