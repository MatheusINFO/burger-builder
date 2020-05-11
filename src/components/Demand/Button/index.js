import styled from "styled-components";

export const Button = styled.button`
        margin: 0 auto;
        border: 0;
        border-radius: 4px;
        color: #fff;
        height: 60px;
        width: 100px;
        padding: 5px;
        font-size: 18px;
        font-weight: bold;
        margin-top: 10px;
        background: ${props => props.color};
`;