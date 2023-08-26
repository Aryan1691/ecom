import { styled } from "styled-components";
const Home = () => {
  const Wrapper = styled.section`
    background-color: ${({ theme }) => theme.colors.bg};
    width: 20rem;
    height: 20rem;
    color: white;
  `;
  return <Wrapper>Home</Wrapper>;
};

export default Home;
