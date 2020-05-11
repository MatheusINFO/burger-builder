import React from 'react';

import { Container } from './styles';

import Backdrop from '../Backdrop';

const Modal = (props) => {
    return(
        <>
            <Backdrop show={props.show} clicked={props.modalClosed}/>
            <Container show={props.show}>
                {props.children}
            </Container>
        </>
    );
}

export default Modal;