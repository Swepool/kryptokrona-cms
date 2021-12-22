import React from 'react';
import styled from "@emotion/styled";
import BorderButtonWhite from "./BorderButtonWhite";

const SidebarContainer = styled.aside`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  background: #2a2a2a;
  display: grid;
  align-items: center;
  top: 0;
  left: 0;
  transition: 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
  top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
  z-index: 999;
`;

const CloseIcon = styled.h3`
  color: #fff;
`;

const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  border: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`;

const SidebarWrapper = styled.div`
  color: #fff;
`;

const SidebarMenu = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(6, 80px);
  padding-inline-start: 0;

  @media screen and (max-width: 480px) {
    grid-template-rows: repeat(6, 60px);
  }
`;

const SidebarLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  text-decoration: none;
  list-style: none;
  transition: 0.2s ease-in-out;
  text-decoration: none;
  color: #fff;
  cursor: pointer;

  &:hover {
    color: #01bf71;
    transition: 0.2s ease-in-out;
  }
`;

const SideBtnWrap = styled.div`
  display: flex;
  justify-content: center;
`;


const Sidebar = ({ isOpen, toggle }) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon>X</CloseIcon>
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink
                        to='/blog'
                        onClick={toggle}
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact='true'
                    >
                        About us
                    </SidebarLink>
                    <SidebarLink
                        onClick={toggle}
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact='true'
                    >
                        Markets
                    </SidebarLink>
                    <SidebarLink
                        onClick={toggle}
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact='true'
                    >
                        OTC
                    </SidebarLink>
                    <SidebarLink
                        onClick={toggle}
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact='true'
                    >
                        Support
                    </SidebarLink>
                </SidebarMenu>
                <SideBtnWrap style={{display: 'flex', gap: '10px'}}>
                    <BorderButtonWhite text={'Sign in'}/>
                    <BorderButtonWhite text={'Log in'}/>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    );
};

export default Sidebar;
