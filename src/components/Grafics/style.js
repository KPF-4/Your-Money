import styled from "styled-components";

export const StyleGrafics = styled.section`
    width: 100vw;
    max-width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-family: 'Roboto';

    .container-Grafics{
        width: 100vw;
        max-width: 100%;
        min-width: 280px;
        display: flex;
        flex-direction: column;
        margin: auto;
        box-shadow: 0px .3rem .3rem 1px rgba(0, 0, 0, 0.25);
        border-radius: 0.75rem;
        padding: 1rem;
        gap: .5rem;

        h3{
            border-bottom: 1px solid var(--black) ;
            max-width: 60%;
        }
    }

    .label-grafic{
        font-size: .75rem;
        font-weight: 600;
    }

    .container-grafic{
        width: 100vw;
        max-width: 100%;
        display: flex;
        justify-content: center;
    }

    .grafic{
        width: 100vw;
        max-width: 60%;
        min-width: 250px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        box-sizing: border-box;
        
    }

    .grafic-evolucao{
        width: 100vw;
        max-width: 90%;
        min-width: 250px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        box-sizing: border-box;
    }

    .filtros{
        display: flex;
        justify-content: flex-start;
        flex-direction: column;
        gap: .5rem;
    }

    .grafic-name{
        font-size: 1rem;
        font-weight: 700;
        border-bottom: 1px solid var(--grey);
        width: 100vw;
        max-width: 60%;
    }
    
    select{
        height: 2rem;
        max-width: 60%;
        min-width: 250px;
        border-radius: 0.5rem;
        border: 1px solid var(--grey);
        background-color: var(--white);
    }

`