import { NavLink } from "react-router-dom";
import { styled } from "styled-components";

const Navbar = () => {
  return (
    <Nav>
      <div className="navbar">
        <ul className="navbar-list">
          <li>
            <NavLink to={"/"} className="navbar-link home-link">
              Home
            </NavLink>{" "}
          </li>
          <li>
            <NavLink to={"/about"} className="navbar-link home-link">
              About
            </NavLink>{" "}
          </li>
          <li>
            <NavLink to={"/products"} className="navbar-link home-link">
              Product
            </NavLink>{" "}
          </li>
          <li>
            <NavLink to={"/contacts"} className="navbar-link home-link">
              contact
            </NavLink>{" "}
          </li>
        </ul>
      </div>
    </Nav>
  );
};

const Nav = styled.nav`
  .navbar-list {
    display: flex;
    gap: 4.8rem;
    align-items: center;
    .navbar-link {
    &:link,
    &:visited{
      display: inline-block;
      text-decoration: none;
      font-size: 1.8rem;
      font-weight: 500;
      text-transform: uppercase;
      color: black;
      transition: color 0.3s linear;
    }

    &:hover,
    &:active{
      color: white;
    }
    }

  }
`;
export default Navbar;
