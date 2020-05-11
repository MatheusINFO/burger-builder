import styled, {keyframes} from 'styled-components';

const rotate = keyframes`
  from{
    transform: rotate(0deg);
  }
  to{
    transform: rotate(360deg);
  }
`;

export const Container = styled.div`
    margin: 20px auto;
    width: 80%;
    text-align: center;
    box-shadow: 0 2px 3px #ccc;
    border: 1px solid #eee;
    padding: 10px;
    box-sizing: border-box;

    @media(min-width: 600px){
        width: 500px;
    }
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const WrapperButton = styled.div`
    display: flex;  
    width: 60%;
    justify-content: space-around;

    svg{
      animation: ${rotate} 2s linear infinite;
    }
`;