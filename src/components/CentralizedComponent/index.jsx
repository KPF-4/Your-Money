import { StyledBackground, StyledSection } from "./styles";

const CentralizedComponent = ({ children }) => {
  return (
    <StyledBackground>
      <StyledSection>{children}</StyledSection>
    </StyledBackground>
  );
};

export default CentralizedComponent;
