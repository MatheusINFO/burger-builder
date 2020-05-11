import React from 'react';

import { Container } from './styles';

export default function Default(props) {
  return (
    <Container>
        {props.children}
    </Container>
  );
}
