import React from 'react';

import {Container} from './styles';
import Toolbar from '../Navigation/Toolbar';

const Layout = (props) => {
   return(
        <Container>
            <Toolbar />
            <main>
                {props.children}
            </main>
        </Container>
   );
};

export default Layout;