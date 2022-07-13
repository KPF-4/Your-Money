import styled from "styled-components";

export const Line = styled.div`
  border-bottom: 1px solid #000;
  width: ${(props) => props.width || "100%"};
`;

export const FeaturedNewsArea = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-top: 20px;

    @media (min-width: 1000px) {
      display: none;
    }

    @media (min-width: 1360px) {
      display: flex;
    }
`

export const FeaturedNewsCard = styled.li`
  display: flex;
  gap: 15px;

  span {
    color: #d42126;
    font-family: "Inter";
    font-size: 20px;
    min-width: 20px;
  }

  a {
    font-weight: 500;
    text-align: justify;
    font-family: "Inter";
    font-size: 14px;
  }
`;