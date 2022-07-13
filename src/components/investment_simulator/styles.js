import styled from "styled-components";

export const FormStyle = styled.form`
    display: flex;
    flex-direction: column;
    gap: 5px;
    select{
        border: 1px solid #5a5858;
        border-radius: 5.33px;
        padding: 8px 10px;
        font-size: 14px;
        font-family: 'Roboto';
    }
`
export const TitleConteiner = styled.div`
    width: 236px;
    margin-bottom: 5px;
    border-bottom: solid 1px black;
    h2{
        font-family: Montserrat;
        font-weight: 700;
        font-size: 16px;
    }
`
export const SelectStyle = styled.div`
    display: flex;
    flex-direction:column;
    span {
        color: #FF0000;
        font-family: 'Roboto';
    }
`
export const RangeStyle = styled.input`
width: 100%;
margin:1rem 0 1rem 0;
-webkit-appearance: none;
    appearance: none;
    display: inline-block;
    height: 0.3em;
    left: 4em;
    border-radius: 5px;
    border: solid .5px var(--green);
    background-color: none;
    outline: none;
    &::-webkit-slider-thumb{
    
    -webkit-appearance: none; 
    border: none;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: var(--green);
    cursor: pointer;
}
`
export const RangeConteiner = styled.div`
    font-family: "Roboto";
    font-size: 16px;
    width: 100%;
    span{
        width: 11rem;
        display: flex;
        align-items: center;
        flex-direction: column;
    }
`
export const ButtonStyle = styled.div`
width: 100%;
display: flex;
justify-content: center;
`
export const Container = styled.div`
display: flex;
flex-direction: column;
gap: 5px;
p{
    font-family: Roboto;
    font-weight: 700;
    font-size: 18px;
    line-height: 23.44px;
}
h2{
    font-family: Montserrat;
    font-weight: 700;
    font-size: 20px;
    line-height: 23.44px;
    margin-bottom: 5px;
}
`