import styled from "styled-components";

export const Button = styled.button`
        margin: 0 auto;
        border: 0;
        border-radius: 4px;
        height: 60px;
        width: 100px;
        padding: 5px;
        font-size: 18px;
        font-weight: bold;
        margin-top: 10px;
        color: #fff;
        cursor: ${props => props.disable ? 'not-allowed' : 'pointer'};
        background: ${props => props.disable ? '#ccc' : props.color};
        opacity: ${props => props.disable ? '0.3' : 1};
 
`;