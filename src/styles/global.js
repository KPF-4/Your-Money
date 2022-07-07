import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
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
    }

    button {
        cursor: pointer;
    }
`;
