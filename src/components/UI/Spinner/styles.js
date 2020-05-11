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
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  height: 250px;
  width: 250px;

  svg{
      animation: ${rotate} 2s linear infinite;
  }
`;
