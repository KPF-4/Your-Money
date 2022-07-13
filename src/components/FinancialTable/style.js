import styled from "styled-components";

export const FinancialTableContainer = styled.div`
    /* margin: 20px auto;
    width: 100vw;
    max-width: 90%;
    min-width: 380px; */
    margin: 20px 0;
    width: 80%;
    height: fit-content;

    display: flex;
    flex-direction: column;
    gap: .5rem;

    padding: 1rem;
    border-radius: 0.75rem;
    box-shadow: 0px .3rem .3rem 1px rgba(0, 0, 0, 0.25);

    font-family: 'Roboto';
    font-size: 0.75rem;

    .title {
        font-weight: 700;
    }

    @media (min-width: 631px) {
        font-size: 16px;
    }
`

export const FinancialTableHeader = styled.header`
    width: 100%;
    height: 20%;

    display: flex;
    flex-direction: column;
    justify-content: center;

    .headerContent {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .headerBtn {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 25%;
    }
`

export const FinancialTableAdd = styled.button`
    width: 80%;
    height: 100%;

    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
    
    border: none;
    background: white;
    font-weight: bold;
`

export const FinancialTableBody = styled.div`
    height: 100%;

    .headerStyleDiv {
        display: flex;
        flex-direction: column;
    }

    .headerContent {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .item {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin: 1px;
    }
`

export const StyledSpan = styled.span`
    width: ${(props)=> props.width? props.width :"25%"};
    display: flex;
    justify-content: ${(props) => props.justify || "center"};
    color: ${(props) => props.color || "black"};
    font-weight: 400;
`
