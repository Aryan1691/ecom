import { NavLink } from "react-router-dom";
import { styled } from "styled-components";
import { FiShoppingCart } from "react-icons/fi";
import { CgClose, CgMenu } from "react-icons/cg";
import { useState } from "react";
const Navbar = () => {
  const [menuIcon, setMenuIcon] = useState();
  return (
    <Nav>
      <div className={menuIcon ? "navbar active" : "navbar"}>
        <ul className="navbar-list">
          <li>
            <NavLink
              to={"/"}
              className="navbar-link home-link"
              onClick={() => {
                setMenuIcon(false);
              }}
            >
              Home
            </NavLink>{" "}
          </li>
          <li>
            <NavLink
              to={"/about"}
              className="navbar-link home-link"
              onClick={() => {
                setMenuIcon(false);
              }}
            >
              About
            </NavLink>{" "}
          </li>
          <li>
            <NavLink
              to={"/products"}
              className="navbar-link home-link"
              onClick={() => {
                setMenuIcon(false);
              }}
            >
              Product
            </NavLink>{" "}
          </li>
          <li>
            <NavLink
              to={"/contacts"}
              className="navbar-link home-link"
              onClick={() => {
                setMenuIcon(false);
              }}
            >
              contact
            </NavLink>{" "}
          </li>
          <li>
            <NavLink to={"/cart"} className="navbar-link cart-trolley--link">
              <FiShoppingCart className="cart-trolly" />
              <span className="cart-total-item">10</span>
            </NavLink>
          </li>
        </ul>
        <div className="mobile-navbar-btn">
          <CgMenu
            name="menu-outline"
            onClick={() => {
              setMenuIcon(true);
            }}
            className="mobile-nav-icon active"
          />
          <CgClose
            name="menu-outline"
            onClick={() => {
              setMenuIcon(false);
            }}
            className="mobile-nav-icon close-outline"
          />
        </div>
      </div>
    </Nav>
  );
};

const Nav = styled.nav`
  @media only screen and (max-width: 750px) {
    .mobile-navbar-btn {
      display: block;
    }
  }
  .mobile-navbar-btn {
    display: none;
    background-color: transparent;
    cursor: pointer;
    border: none;
  }
  .mobile-nav-icon[name="close-outline"] {
    display: none;
  }

  @media (max-width: 768px) {
    .mobile-navbar-btn {
      display: inline-block;
      z-index: 999;
    }
    .mobile-nav-icon {
      font-size: 4.3rem;
    }
    .active .mobile-nav-icon {
      display: none;
      font-size: 4.2rem;
      position: absolute;
      top: 30%;
      right: 10%;
      z-index: 9999;
    }
    .active .close-outline {
      display: inline-block;
    }
    .navbar-list {
      width: 100vw;
      height: 100vh;
      position: absolute;
      top: 0;
      left: 0;
      background-color: #fff;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      visibility: hidden;
      opacity: 0;
      transform: translateX(100%);
      transition: all 1s linear;
    }
    .active .navbar-list {
      visibility: visible;
      opacity: 1;
      transform: translateX(0);
      z-index: 999;
      transform-origin: right;
      transition: all 1s linear;
      .navbar-link {
        font-size:4.9rem;
      }
      .cart-trolley--link {
        position: relative;
      }
    }
  
  }
  .close-outline {
    display: none;
  }
  .cart-trolley--link {
    position: relative;

    .cart-trolly {
      position: relative;
      font-size: 2.4rem;
    }
    .cart-total-item {
      position: absolute;
      width: 2.6rem;
      height: 2.6rem;
      background-color: lightblue;
      border-radius: 50%;
      display: grid;
      place-items: center;
      top: -20px;
      left: 70%;
      padding: 1px;
    }
  }

  .navbar-list {
    display: flex;
    gap: 4.8rem;
    align-items: center;
    .navbar-link {
      &:link,
      &:visited {
        display: inline-block;
        text-decoration: none;
        font-size: 1.8rem;
        font-weight: 500;
        text-transform: uppercase;
        color: black;
        transition: color 0.3s linear;
      }

      &:hover,
      &:active {
        color: white;
      }
    }
  }

`;
export default Navbar;
