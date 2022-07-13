import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const SupConteiner = styled.div`
  figure {
    width: 10rem;
    border: 5px dashed #53f3;
    border-radius: 100px;
    overflow: hidden;
    height: 10rem;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      width: 100%;
    }
  }
`;

export const MainContainer = styled.div`
  width: 80%;

  ul {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    li {
      display: flex;
      flex-direction: column;
      align-items: center;
      list-style: none;
      font-family: "Inter";
      width: 80%;
      line-height: 30px;
      text-align: center;
      figure {
        transition: 0.3s;

        :hover {
          /* animation: rotate 1s;

          @keyframes rotate {
            50% {
              transform: scaleX(-1);
            }
          } */
          transform: scaleX(-1);
        }
      }
    }
  }
`;
