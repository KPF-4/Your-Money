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
        --green-button: #38C172;
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

    .modal {
        position: relative;
        overflow: auto;
        
        outline: none;
        margin: 100px auto;
        
        padding: 20px;
        width: 80%;
        height: fit-content;
        
        background: rgb(255, 255, 255);
        border-radius: 4px;
        border: 1px solid rgb(204, 204, 204);
    }
    
    @media screen and (min-width: 650px) {
        .modal {
            width: 60%;
        }
    }
    
    @media screen and (min-width: 800px) {
        .modal {
            width: 40%;
        }
    }
    
    @media screen and (min-width: 1080px) {
        .modal {
            width: 25%;
        }
    }
`;
