import React from 'react';
import {FaSpinner} from 'react-icons/fa'

import {Container} from './styles';

const Spinner = () => (
    <Container style={{textAlign: 'center'}}><FaSpinner color="#966909" size={100} /></Container>
);

export default Spinner;