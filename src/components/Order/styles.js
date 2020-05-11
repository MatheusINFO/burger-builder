import styled from 'styled-components';

export const Container = styled.div`
    width: 70%;
    border: 1px solid #eee;
    box-shadow: 0 2px 3px #ccc;
    padding: 20px;
    margin: 10px auto;
    box-sizing: border-box;
    display: flex;
    justify-content: space-around;

    p{
        font-size: 20px;

        span{
            text-transform: capitalize;
            display: inline-block;
            margin: 0 8px;
            border: 1px solid #ccc;
            padding: 5px; 
            background-color: #703b09;
            color: #fff;
            border: 0;
            border-radius: 4px;
        }
    }
`;