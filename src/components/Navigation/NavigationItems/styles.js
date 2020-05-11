import styled from "styled-components";

export const UlList = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;

    @media(min-width: 600px){
        flex-direction: row;
    }
`;