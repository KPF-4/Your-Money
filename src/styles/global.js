import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Lobster&display=swap');

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    :root{
        --green: #008000;
        --red: #FF0000;
        --black: #000000;
    }
    button {
        cursor: pointer;
    }
`

