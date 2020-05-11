import React from 'react';
import {Route, Switch, Link} from 'react-router-dom';
import {useSelector} from 'react-redux';
 
import BurguerBuilder from './containers/BurgerBuilder';
import Checkout from './containers/Checkout';
import Orders from './containers/Orders';
import Auth from './containers/Auth';
import Logout from './containers/Auth/Logout';
import Default from './components/UI/Default';

import Burger from './assets/original.png';

const Routes = () => {
    const isAuth = useSelector(state => state.authReducer.token !== null);

    let routes = (
        <Switch>
            <Route exact path="/" component={BurguerBuilder} />
            <Route path="/auth" component={Auth} />

            <Route path="/" component={() => (
                    <Default>
                        <img src={Burger} alt="burger"/>
                        <p>Hey, essa página não existe :/</p>
                        <Link to="/">menu</Link>
                    </Default>
            )} />
        </Switch>
    )

    if(isAuth){
        routes = (
            <Switch>
                <Route exact path="/" component={BurguerBuilder} />
                <Route path="/auth" component={Auth} />
                <Route path="/checkout" component={Checkout} />
                <Route path="/orders" component={Orders} />
                <Route path="/logout" component={Logout} />

                <Route path="/" component={() => (
                            <Default>
                                <img src={Burger} alt="burger"/>
                                <p>Hey, essa página não existe :/</p>
                                <Link to="/">menu</Link>
                            </Default>
                )} />
             </Switch>
        )
    }

    return(
        <>
            {routes}
        </>
    )
}

export default Routes;