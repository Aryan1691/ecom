import { NavLink } from "react-router-dom";
import { styled } from "styled-components";

const HeroSection = () => {
  return (
    <Wrapper>
      <div className="container">
        <div className="grid grid-two-column">
          <div className="hero-section-data">
            <p className="intro-data">Welcome to </p>
            <h1>Aryan Store</h1>
            <p>
              {" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
              atque temporibus veniam doloribus libero ad error omnis voluptates
              animi! Suscipit sapiente.
            </p>
            <NavLink>
              <Button>Shop Now</Button>
            </NavLink>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
const Button = styled.button`
  text-decoration: none;
  max-width: auto;
  background-color: rgb(98 84 243);
  color: rgb(255 255 255);
  padding: 1.4rem 2.4rem;
  border: none;
  text-transform: uppercase;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s ease;
  -webkit-transition: all 0.3s ease 0s;
  -moz-transition: all 0.3s ease 0s;
  -o-transition: all 0.3s ease 0s;

  &:hover,
  &:active {
    box-shadow: 0 2rem 2rem 0 rgb(132 144 255 / 30%);
    box-shadow: ${({ theme }) => theme.colors.shadowSupport};
    transform: scale(0.96);
  }

  a {
    text-decoration: none;
    color: rgb(255 255 255);
    font-size: 1.8rem;
  }
`;
const Wrapper = styled.section`
  .container {
    max-width: 120rem;
    padding-block: 2rem;
    padding-inline: 2rem;
    margin: 0 auto;
  }

    .grid {
      display: grid;
      gap: 9rem;
    }
    .grid-two-column {
      grid-template-columns: repeat(2, 1fr);
    }
    .grid-three-column {
      grid-template-columns: repeat(3, 1fr);
    }
    .grid-four-column {
      grid-template-columns: repeat(4, 1fr);
    }
`;
export default HeroSection;
