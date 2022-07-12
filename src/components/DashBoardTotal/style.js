import styled from "styled-components";

export const DashBoardTotalContainer = styled.div`
    margin: 20px auto;
    width: 100vw;
    max-width: 90%;
    min-width: 380px;
    height: fit-content;

    display: flex;
    flex-direction: column;
    gap: .5rem;

    padding: 1rem;
    border-radius: 0.75rem;
    box-shadow: 0px .3rem .3rem 1px rgba(0, 0, 0, 0.25);

    font-family: 'Roboto';

`

export const DashBoardTotalHeader = styled.header`
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
export const DashBoardBody = styled.div`
    height: 100%;
    width: 100%;

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
    justify-content: ${(props) => props.justify || "center"};
    color: ${(props) => props.color || "black"}
`



