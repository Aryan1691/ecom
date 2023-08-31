import { NavLink } from "react-router-dom";
import { styled } from "styled-components";

// eslint-disable-next-line react/prop-types
const HeroSection = ({ name }) => {
  return (
    <Wrapper>
      <div className="container">
        <div className="grid grid-two-column">
          <div className="hero-section-data">
            <p className="intro-data">Welcome to </p>
            <h1>{name}</h1>
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
          <div className="hero-section-image">
            <figure>
              <img src="images/hero.jpg" alt="hero" className="img-style" />
            </figure>
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
  padding: 7rem;
  padding-inline: 3rem;
  img {
    min-width: 30rem;
    height: 30rem;
  }
  .hero-section-data {
    p {
      margin: 2rem 0;
      color: black;
    }
    h1 {
      text-transform: capitalize;
      font-weight: bold;
      color: black;
    }
    .intro-data {
      margin-bottom: 0;
    }
  }

  .hero-section-image {
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  figure {
    position: relative;

    &::before {
      content: "";
      width: 60%;
      height: 80%;
      background-color: rgba(81, 56, 238, 0.4);
      position: absolute;
      left: 50%;
      top: -5rem;
      z-index: -1;
    }
    .img-style {
      width: 100%;
      height: auto;
    }
  }
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
    grid-template-columns: 1fr 1.2fr 0.5fr 0.8fr;
  }
  @media (max-width: 768px) {
  
    .hero-section-data{
      h1{
        font-size: 5rem;
      }
      margin-bottom: 5rem;
    }
    padding: 4rem;
    padding-inline: 2rem;
    .grid {
      gap: 10rem;
    }
    figure::after {
      content: "";
      width: 50%;
      height: 100%;
      left: 0;
      top: 10%;
      /* bottom: 10%; */
      background-color: rgba(81, 56, 238, 0.4);
    }
    .grid-two-column {
      grid-template-columns: repeat(1, 1fr);
    }
  }
`;
export default HeroSection;
