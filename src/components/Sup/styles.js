import styled from "styled-components";

export const Container = styled.section`
    display: flex;
    justify-content: center;
    height: 100%;
`
export const FormContainder = styled.div`

    form{
        display: flex;
        flex-direction: column;
        gap: 5px;
    }

    textarea{
        box-sizing: border-box;
        padding: 5px;
        resize: none;
        width:100%;
        font-family: 'Roboto';
        font-weight: 700;
    }
    span{
        color: #FF0000;
        font-family: 'Roboto';
    }
`
export const ButtonConteiner = styled.div`
    margin-top: 5px;
    display: flex;
    justify-content: center;
`