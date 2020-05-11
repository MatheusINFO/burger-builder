import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    margin: auto;
    height: 500px;
    text-align: center;
    font-weight: bold;
    font-size: 1.2rem;
    overflow: auto;
    margin-top: 100px;
    margin-bottom: 80px;

    @media(min-width: 1000px) and (min-height: 700px){
        width: 700px;
        height: 600px;
    }

    @media(min-width: 500px) and (min-height: 401px){
        width: 450px;
        height: 400px;
    }

    @media(min-width: 500px) and (min-height: 400px){
        width: 350px;
        height: 300px;
    }
`;