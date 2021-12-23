import * as React from "react";
import Container from "./Container";
import BorderButton from "./BorderButton";
import { Link } from "gatsby";
import LogoDark from '/src/assets/images/Logo.svg'
import styled from "@emotion/styled";



const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 120px;
  z-index: 2;
`;

const NavNavigation = styled.div`
  display: flex;
  gap: 30px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const Text = styled.p`
  color: #33333a;
  text-decoration: none;
  font-size: 18px;
  &:hover {
    color: #777787;
  }
`;
const NavButtons = styled.div`
  display: flex;
  gap: 10px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const Hamburger = styled.div`
  display: none;
  cursor: pointer;

  @media screen and (max-width: 768px) {
    display: block;
  }
`;

const HamburgerMenu = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
  }
`;


const Navbar = ({ toggle }) => {
    return (
        <Container>
            <NavContainer>
                <Link to='/'>
                    <img style={{Height: '40px'}}src={LogoDark} alt={'NBX logo'}/>
                </Link>
                <NavNavigation>
                    <Link to="/blog">
                        <Text>About us</Text>
                    </Link>
                    <Link to={"https://app.nbx.com/markets"}>
                        <Text>Markets</Text>
                    </Link>
                    <Link to={"/index.js"}>
                        <Text>OTC</Text>
                    </Link>
                    <Link to={"https://nbxsupport.zendesk.com/hc/en-us"}>
                        <Text>Support</Text>
                    </Link>
                </NavNavigation>
                <NavButtons>
                    <BorderButton url={"https://app.nbx.com/login"} label={"Log in"} />
                </NavButtons>
                <Hamburger onClick={toggle}><h3>=</h3></Hamburger>
            </NavContainer>
        </Container>
    );
};

export default Navbar;