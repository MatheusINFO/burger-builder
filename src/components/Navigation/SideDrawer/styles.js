import styled, {css} from 'styled-components';

export const Container = styled.div`
  position: fixed;
  width: 200px;
  max-width: 70%;
  height: 100%;
  left: 0;
  top: 0;
  z-index: 200;
  background-color: white;
  padding: 32px 16px;
  transition: transform 0.3s ease-out;
  transform: ${props => !props.on && css`translateX(-100%)` };
  /*transform: ${props => props.off && css`translateX(-100%)` };*/

  @media(min-width: 600px){
      display: none;
  }

  img{
      background-color: #fff;
      border-radius: 4px;
      padding: 8px;
      height: 60px;
      margin-bottom: 25px;
  }

  /*
  Open = transform: translateX(0);
  Close = transform: transalteX(-100%);
  */
`;

