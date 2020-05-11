import styled, {keyframes, css} from 'styled-components';
import {darken} from 'polished';

const enable = keyframes`
  0% {
      transform: scale(1);
  }
  60% {
      transform: scale(1.2);
  }
  100% {
      transform: scale(1);
  }
`;

export const Container = styled.div`
  width: 100%;
  background: #cf8f2e;
  height: 60vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 2px 1px #ccc;
  margin: auto;
  padding: 10px 0;
  justify-content: center;

  @media(max-height: 800px){
    height: 45vh;
  }

  p{
    margin-top: -50px;
    margin-bottom: 50px;
    font-weight: bold;
    font-size: 17px;
    color: #fff;

    @media(max-height: 800px){
      margin-top: 10px;
      margin-bottom: 10px;
    }
  }
`;

export const Button = styled.button`
    outline: none;
    font-family: inherit;
    font-size: 1.2em;
    padding: 15px 30px;
    box-shadow: 2px 2px 2px #966909;
    margin-top: 10px;
    color: ${props => props.disabled? '#888888' : '#966909'};
    background: ${props => props.disabled ? ' #C7C6C6' : '#DAD735'};
    border: ${props => props.disabled ? '1px solid #ccc' : '1px solid #966909'};
    cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
    animation: ${props => !props.disabled && css`${enable} 0.3s linear`};

    :hover{
      background: ${props => props.disabled ? null : darken(0.05, "#DAD735")};
      border: ${props => props.disabled ? null : "1px solid #966909"};
      color:${props => props.disabled ? null : "#966909"} ;
    }
`;

