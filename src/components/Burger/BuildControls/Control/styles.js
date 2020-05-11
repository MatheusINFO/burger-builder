import styled from 'styled-components';
import {darken} from 'polished';

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 5px 0;

    div{
        padding: 10px;
        font-weight: bold;
        width: 80px;
        margin-right: 10px;
    }

`;


export const Button = styled.button`
        display: block;
        font: inherit;
        padding: 5px;
        margin: 0 5px;
        width: 80px;
        color: #fff;
        border: 1px solid #aa6817;
        cursor: ${props => props.disabled ? "not-allowed" : "pointer"};
        background-color: ${props => props.disabled ? "#AC9980" : props.color};


        :hover{
            background: ${props => props.disabled ? darken(0.08, "#AC9980") : darken(0.08, props.color)};
            box-shadow: inset 0 0 3px #000;
        }
`;
