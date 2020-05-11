import React from 'react';

import { Container, Button } from './styles';

const Control = (props) => {
    return(
        <Container>
            <div>{props.label}</div>
            <Button color="#D39952" disabled={props.disabled} onClick={props.del}>Remover</Button>
            <Button color="#8F5E18"  onClick={props.add}>Adicionar</Button>
        </Container>
    );
}

export default Control;
