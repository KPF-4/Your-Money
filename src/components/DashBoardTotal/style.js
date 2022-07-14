import styled from "styled-components";

export const DashBoardTotalContainer = styled.div`
    margin-bottom: 20px;
    width: 100%;
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
    width: 60%;
    height: 20%;

    display: flex;
    flex-direction: column;
    justify-content: center;

    border-bottom: 1px solid var(--black);

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
        font-size: .875rem;
        font-weight: 600;
    }
`
export const StyledSpan = styled.span`
    justify-content: ${(props) => props.justify || "center"};
    color: ${(props) => props.color || "black"}
`



