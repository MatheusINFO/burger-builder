import React from 'react';

import {Container} from './styles';

const DrawerToggle = (props) => {
   return(
        <Container onClick={props.clicked} style={{cursor: 'pointer'}}>
            <div/>
            <div/>
            <div/>
        </Container>
   );
};

export default DrawerToggle;