import styled from "styled-components";

export const StyledHome = styled.section`

display: flex;
flex-direction: column;
align-items: center;

.container-home{
    width: 80%;

}

.cotacao-simualdor{
    display: flex;
    flex-direction: column;
}

#cotacoes{
   
   display: flex;
   flex-direction: column;

   figure{
  
   
   }
  
  
}

.simulador{
    
    display: flex;
    flex-direction: row;
      
}



.noticiasDiarias{
    
    display: none;
    flex-direction: column;
    

}

.noticiasSegmento{
    width: 95%;
    display: flex;
    flex-direction: column;
      
}

@media screen and (min-width:631px) {
    .cotacao-simualdor{
       
        flex-direction: column-reverse;
    }

    #cotacoes{
        width: 100%;
        flex-direction: row-reverse;
        justify-content: center;
        flex-wrap: nowrap;
        #img-figure{
           
            width: 50%;
   
   }
    }
    .cotacao{
        width: 50%;
    }

    .noticiasDiarias{
        width: 70%;

        display: flex;
        


    }
}

`