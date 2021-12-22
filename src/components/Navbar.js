import * as React from "react";
import Container from "./Container";
import BorderButton from "./BorderButton";
import { Link } from "gatsby";
import LogoDark from '/src/assets/images/Logo.svg'
import styled from "@emotion/styled";



const NavContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-top: 20px;
  padding-bottom: 20px;
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


const Navbar = () => {
    return (
        <Container>
            <NavContainer>
                <Link to='/'>
                    <img style={{Height: '40px'}}src={LogoDark} alt={'NBX logo'}/>
                </Link>
                <NavNavigation>
                    <Link to="/about">
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
                    <BorderButton url={"https://app.nbx.com/login/signup"} text={"Sign up"} />
                    <BorderButton url={"https://app.nbx.com/login"} text={"Log in"} />
                </NavButtons>
                <Hamburger
                    onClick={() => setShowMenu(!showMenu)}
                />
                <HamburgerMenu></HamburgerMenu>
            </NavContainer>
        </Container>
    );
};

export default Navbar;