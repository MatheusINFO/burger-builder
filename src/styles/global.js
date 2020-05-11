import {createGlobalStyle} from 'styled-components'

import "react-toastify/dist/ReactToastify.css";

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    body, input, #root{
        font-family: 'Open Sans', sans-serif;
        text-rendering: optimizeLegibility !important;
        -webkit-font-smoothing: antialiased !important;
        background-repeat: no-repeat;
        background-attachment: fixed;
    }

    button{
        cursor: pointer;
    }
`;

export default GlobalStyle;