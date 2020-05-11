import styled from 'styled-components';

export const LiItem = styled.li`
    margin: 0;
    display: flex;
    height: 100%;
    width: auto;
    align-items: center;


  @media(min-width: 500px){
    margin: 10px 0;
    box-sizing: border-box;
    display: block;
    width: 100%;
  }


  a{
      color: #8F5C2F;
      text-decoration: none;
      height: 100%;
      padding: 16px;
      border-bottom: 4px solid transparent;
      box-sizing: border-box;

      :hover{
        color: #40a4cb;
      }
          

      @media(min-width: 600px){
        color: #fff;
        text-decoration: none;
        width: 100%;
        box-sizing: border-box;
        display: block;

        :hover{
            background-color: #8f5c2c;
            border-bottom: 4px solid #40A4CB;
            color: #40a4cb;
        }  
      }
  }
`;
