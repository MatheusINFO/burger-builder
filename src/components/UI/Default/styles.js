import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 100%;
    background: #703b00;
    margin-top: -72px;
    position: fixed;
    z-index: 90;
    justify-content: center;
    align-items: center;

    img{
        opacity: 0.3;
        position: absolute;
        z-index: 0;
        width: 1000px;

        @media(max-width: 1000px){
            width: 600px;
        }

        @media(max-width: 800px){
            width: 400px;
        }
    }

    p{
        color: #fff;
        font-size: 45px;
        z-index: 1;

        @media(max-width: 800px){
            font-size: 35px;
        }
    }

    a{
        color: #75d1eb;
        text-decoration: none;
        font-weight: bold;
        font-size: 25px;
        z-index: 11;

        @media(max-width: 1000px){
            font-size: 20px;
        }

        :hover{
            text-decoration: underline;
        }
    }
`;