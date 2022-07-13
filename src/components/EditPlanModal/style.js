import styled from "styled-components";

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, .55);
    position: fixed;
    top: 0px;
    left: 0px;
    z-index: 2000;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
export const StyleModal = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    background-color: var(--white);
    width: 100vw;
    min-width: 250px;
    max-width: 40%;
    margin: auto;
    box-sizing: border-box;
    box-shadow: 0px .3rem .3rem 1px rgba(0, 0, 0, 0.25);
    border-radius: 0.75rem;
    padding: 1rem;
    gap: .5rem;

`
export const ModalHeader = styled.div`
    width: 100%;
    display: inline-flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 2px solid var(--grey);

    .close{
        border: none;
        background: var(--white);
        border-radius: 5px;
        width: 1.5rem;
        height: 1.5rem;
        font-weight: 700;

        &:hover{
            background-color: rgba(0, 0, 0, .25);
            color: var(--grey);
        }
    }
`
export const StyleForm = styled.form`
    width: 100vw;
    max-width: 90%;
    display: flex;
    flex-direction: column;
    gap: .5rem;

`
export const StyleEdit = styled.div`
    
    display: flex;
    flex-direction: column;
    gap: .5rem;

    span {
        color: #FF0000;
        font-family: 'Roboto';
    }

    input{
        border: 1px solid #5a5858;
        border-radius: 5.33px;
        padding: 8px 10px;
        
        font-size: 14px;
        font-family: 'Roboto';
    }
    .inputEdit{
        display: flex;
        flex-direction: column;
        font-size: 14px;
        font-family: 'Roboto';

        span{
            border: 1px solid #5a5858;
            border-radius: 5.33px;
            color: var(--grey);
            height: 35px;
            display: inline-flex;
            align-items: center;
            padding: 10px;
            background-color: #f3f3f3;

        }
        .labelEdit{
            background-color: #ffffff;
            border: none;
            padding: 0;
            font-size: 1rem;
            height: auto;
        }
    }

`

