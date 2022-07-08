import styled from "styled-components";

export const StyleQuotation = styled.section`
    width: 100vw;
    max-width: 100%;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    font: 'Montserrat';
    justify-content: space-between;
    padding: 0.5rem 0 0.5rem 0;

    h3{
        font-family: "Montserrat";
    }

    .title{
        width: 100vw;
        max-width: 70%;
        font-size: .75rem;
        font-weight: 700;
        text-align: left;
        border-bottom: 1px solid var(--black);
        padding: 0.5rem 0 0.5rem 0;
        
    }

    .list-titles{
        display: inline-flex;
        justify-content: flex-end;
        align-items: center;
        border-bottom: 1px solid var(--black);
        text-align: center;
    }
    .list{
        display: inline-flex;
        justify-content: center;
        gap: 1rem;
        align-items: center;
        border-bottom: 1px solid var(--black);
        text-align: center;
    }
    
`

export const StyleSpan = styled.span`
    width: 25%;
    color: ${props=> props.color || "#000000"};
    font-size: .6875rem;
    font-weight: 700;
    font-family: 'Montserrat';
    padding: 0.5rem 0 0.5rem 0;

`
export const StyleForm = styled.form`
    width: 100vw;
    max-width: 100%;
    display: flex;
    flex-direction: column;
    padding: 0.5rem 0 0.5rem 0;
    box-sizing: border-box;

    h3{
        font-family: "Montserrat";
    }
    .title{
        
        width: 100vw;
        max-width: 70%;
        font-size: .75rem;
        font-weight: 700;
        text-align: left;
        border-bottom: 1px solid var(--black);
        padding: 0.5rem 0 0.5rem 0;
        
    }
    span{
        font-family: "Roboto";
        font-weight: 700;
        font-size: .8125rem;
        padding: 0.5rem 0 0.5rem 0;

    }
    div{
        display: inline-flex;
        justify-content: space-between;
        align-items: center;
        gap: 1rem;
    }
    button{
        background: var(--blue-button);
        border: none;
        height: 2.5rem;
        width: 100vw;
        max-width: 50%;
        color: var(--white);
        font-size: .875rem;
        font-weight: 700;
        font-family: 'Roboto';
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 10px;
        &:hover{
            box-shadow: drop-shadow(1 1 0.75rem crimson);
        }
    }
    select{
        border: 1px solid var(--grey);
        background: var(--white);
        height: 2.5rem;
        border-radius: 10px;
        
    }
    input{
        border: 1px solid var(--grey);
        background: var(--white);
        height: 2.5rem;
        border-radius: 10px;
        padding: 0 .5rem 0 .5rem;
        width: 100vw;
        max-width: 50%;
    }
`

export const StyleResult = styled.section`
    width: 100vw;
    max-width: 100%;
    display: flex;
    flex-direction: column;
    gap: .5rem;

    h3{
        font-family: "Montserrat";
    }
    .title{
        width: 100vw;
        max-width: 70%;
        font-size: .75rem;
        font-weight: 700;
        text-align: left;
        border-bottom: 1px solid var(--black);
        padding: 0.5rem 0 0.5rem 0;  

    }

    span{
        font-family: "Montserrat";
        font-size: .875rem;
        font-weight: 700;
    }

    button{
        background: var(--blue-button);
        border: none;
        height: 2.5rem;
        width: 100vw;
        max-width: 100%;
        color: var(--white);
        font-size: .875rem;
        font-weight: 700;
        font-family: 'Roboto';
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 10px;
        &:hover{
            box-shadow: drop-shadow(1 1 0.75rem crimson);
        }
    }


`