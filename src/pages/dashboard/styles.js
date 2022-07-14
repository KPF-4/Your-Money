import styled from "styled-components";

export const StyledDashboard = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100vw;
    max-width: 90%;
    min-width: 300px;
    align-items: center;
    margin: 1rem auto 1rem auto;
    gap: 1rem;
    

    @media (min-width: 768px){
        display: flex;
        flex-wrap: wrap;
    }

   
`

export const StyleFinancial = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100vw;
    max-width: 100%;
    gap: 1rem;
    @media (min-width: 768px){
        max-width: 40%;
    }
    
`

export const StyleGraficDash = styled.div`
    display: flex;

    @media (min-width: 768px){
        max-width: 40%;
    }
`