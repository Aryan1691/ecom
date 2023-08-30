import { styled } from "styled-components";
import HeroSection from "./HeroSection";
const Home = () => {
  const Wrapper = styled.section`
    background-color: ${({ theme }) => theme.colors.bg};
    color: white;
    height: 100vh;
  `;
  return (
    <Wrapper>
      <HeroSection />
    </Wrapper>
  );
};

export default Home;
