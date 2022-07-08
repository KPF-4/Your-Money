import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    :root{
        --green: #008000;
        --grey: #5A5858;
        --red: #FF0000;
        --white: #ffffff;
        --black: #000000;
        --blue-button: #3490DC;
    }

    h1 {
        font-family: "Lobster", cursive;
        font-size: 2rem;
    }

    h2 {
        font-family: "Roboto";
        font-size: 29px;
    }

    h3, label {
        font-family: "Roboto";
        font-size: 16px;
    }

    a {
        text-decoration: none;
        color: #000;
    }

    button {
        cursor: pointer;
    }
`;
