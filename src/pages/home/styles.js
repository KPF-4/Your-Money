import styled from "styled-components";

export const StyledHome = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  min-height: 100vh;

  .container-home {
    width: 80%;
  }

  .cotacao-simualdor {
    display: flex;
    flex-direction: column;
  }

  #cotacoes {
    display: flex;
    flex-direction: column;
  }

  .simulador {
    display: flex;
    flex-direction: row;
  }

  @media screen and (min-width: 1000px) {
    .cotacao-simualdor {
      flex-direction: column-reverse;
    }

    #cotacoes {
      width: 100%;
      flex-direction: row-reverse;
      justify-content: center;
      flex-wrap: nowrap;
      align-items: center;
      #img-figure {
        width: 50%;
      }
    }
    #cotacao {
      width: 50%;
    }
  }
  
`;
