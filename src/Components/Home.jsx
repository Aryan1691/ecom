import { styled } from "styled-components";
const Home = () => {
  const Wrapper = styled.section`
    background-color: ${({ theme }) => theme.colors.bg};
    color: white;
    height: 100vh;
  `;
  return <Wrapper>Home</Wrapper>;
};

export default Home;
