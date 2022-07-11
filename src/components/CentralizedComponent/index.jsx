import { StyledBackground, StyledSection } from "./styles";

const CentralizedComponent = ({ children, loginArea }) => {
  return (
    <StyledBackground>
      <StyledSection loginArea={loginArea}>{children}</StyledSection>
    </StyledBackground>
  );
};

export default CentralizedComponent;
