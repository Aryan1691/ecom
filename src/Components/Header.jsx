import { NavLink } from "react-router-dom";
import { styled } from "styled-components";
import Navbar from "./Navbar";
import bg from "../assets/ecom.png";
const Header = () => {
  return (
    <MainHeader>
      <NavLink to={"/"}>
        <img src={bg} alt="logo" className="logo" />
      </NavLink>
      <Navbar/>
    </MainHeader>
  );
};
const MainHeader = styled.header`
  padding: 0 4.8rem;
  height: 7rem;
  background-color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  position: relative;
  .logo {
    height: 7rem;
  }
`;
export default Header;
