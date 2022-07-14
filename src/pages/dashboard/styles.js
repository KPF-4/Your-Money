import styled from "styled-components";

export const StyledDashboard = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const MainDashboard = styled.section`
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (min-width: 1000px) {
        flex-direction: row-reverse;
        gap: 20px;
        align-items: flex-start;
        width: 80%;
    }
`;

export const FinancialDashboard = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 20px;
    @media (min-width: 1000px) {
        width: 50%;
    }
`