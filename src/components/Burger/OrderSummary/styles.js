import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;

    h3{
        padding-bottom: 10px;
        margin: 10px 5px;
    }

    p{
        margin-bottom: 10px;
    }

    ul{
        margin-left: 40px;
    }

    strong{
        text-align: center;
        padding: 10px;
    }
`;

export const WrapperButton = styled.div`
    display: flex;
    justify-content: space-around;
    margin-right: 110px;
    margin-left: 110px;

    @media(max-width: 600px){
        margin-right: 50px;
        margin-left: 50px;
    }
`;
