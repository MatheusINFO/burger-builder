import React from 'react';

import {Container} from './styles';

const Backdrop = (props) => {
    return(
       props.show ? <Container onClick={props.clicked}/> : null
    );
}

export default Backdrop;