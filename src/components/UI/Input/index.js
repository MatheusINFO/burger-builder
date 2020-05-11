import React from 'react';

import {Container, Label, InputText, SelectText} from './styles';

const Input = (props) => {
    let inputElement = 0;

    switch(props.elementType){
        case ('input'):
            inputElement = <InputText 
                {...props.elementConfig} 
                value={props.value}
                onChange={props.changed} 
                name={props.name}
                invalid={props.invalid}
            />
            break;
        case ('select'):
            inputElement = (
                <SelectText
                    value={props.value}
                    onChange={props.changed}
                >
                    {props.elementConfig.options.map(option => {
                        return(
                            <option key={option.value} value={option.value}>{option.displayValue}</option>
                        )
                    })}
                </SelectText>
            );
            break;
        default: 
             inputElement = <InputText {...props.elementConfig} value={props.value}/>
    }   

    return(
        <Container>
            <Label/>
            {inputElement}
        </Container>
    )
}

export default Input;