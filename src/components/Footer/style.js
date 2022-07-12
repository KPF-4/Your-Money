import styled from "styled-components";


export const StyledFooter = styled.footer`
  width: 100%;
  height: 353px;
  background: #000000;
  color: #FFFFFF;
  gap: 10px;
  bottom: 0;


  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @media (max-width: 630px) {
    height: 135px; 
    gap: 4px; 
  }
    
   
  .Footer-inicio{
    width: 90%;
    padding-left: 30%;
    
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    font-family: 'Lobster';
    font-style: normal;
    font-size: 32px;

    @media (max-width: 630px) {
    font-size: 13px;
    }

    .Footer-SobreNos{
      color: #FFFFFF;
    }

    .Footer-redesSociais{
      display: flex;
      justify-content: space-between;
      width: 20%; 
    } 
  }

  .Footer-link{
    width: 90%;
    padding-left: 30%;
    display: flex;
    flex-direction: column;
    gap: 10px;

    @media (max-width: 630px) {
      gap: 4px;
      }
    
    .Footer-li{
      
      font-family: 'Inter';
      font-style: normal;
      font-size: 24px;
      color: #FFFFFF;
      
      @media (max-width: 630px) {
       font-size: 10px;
      }
    }
  }

`