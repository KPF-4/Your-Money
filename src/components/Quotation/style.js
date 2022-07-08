import styled from "styled-components";

export const StyleQuotation = styled.section`
    width: 100vw;
    max-width: 100%;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    font-family: 'Montserrat';
    justify-content: space-between;

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
        gap: .5rem
    }
    .list{
        display: inline-flex;
        justify-content: center;
        gap: 1rem;
        align-items: center;
        border-bottom: 1px solid var(--black);
    }
    
`

export const StyleSpan = styled.span`
    width: 25%;
    color: ${props=> props.color || "#000000"};
    font-size: .6875rem;
    font-weight: 700;
    font-family: 'Montserrat';

`
export const StyleForm = styled.form`
    

`