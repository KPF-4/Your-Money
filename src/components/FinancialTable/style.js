import styled from "styled-components";

export const FinancialTableContainer = styled.div`
    margin-top: 20px;
    width: 100%;
    height: fit-content;

    width: 100vw;
    max-width: 100%;
    display: flex;
    flex-direction: column;
    gap: .5rem;

    padding: 1rem;
    border-radius: 0.75rem;
    box-shadow: 0px .3rem .3rem 1px rgba(0, 0, 0, 0.25);

    font-family: 'Roboto';
    font-size: 0.75rem;
    box-sizing: border-box;

    .title {
        font-weight: 700;
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
        gap: 10%;
    }
`

export const FinancialTableAdd = styled.button`
    height: 100%;

    display: flex;
    align-items: flex-end;
    flex-direction: row;
    justify-content: space-between;
    
    border: none;
    background: white;
    font-weight: bold;
    svg {
        height: 20px;
        width: 20px;
    }
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
