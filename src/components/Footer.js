import React from 'react';
import styled from "@emotion/styled";
import {Link} from "gatsby";
import Container from "./Container";

const FooterContainer = styled.footer`
  background-color: #2a2a2a;
  padding-top: 40px;
`;

const FooterWrap = styled.div`
  width: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  margin: 0 auto;
`;

const FooterLinksContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;

  @media screen and (max-width: 820px) {
    padding-top: 32px;
    justify-content: start;
  }
`;

const FooterLinksWrapper = styled.div`
  display: flex;
  

  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;

const FooterLinkItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 20px;
  text-align: left;
  width: 160px;
  box-sizing: border-box;
  color: #fff;

  @media screen and (max-width: 420px) {
    margin: 0;
    padding: 10px;
    width: 100%;
  }
`;

const FooterLinkTitle = styled.h1`
  font-size: 24px;
  margin-bottom: 16px;
  color: #fff
`;

const FooterLink = styled(Link)`
  color: rgba(255, 255, 255, 0.5);
  text-decoration: none;
  margin-bottom: 0.5rem;
  font-size: 18px;

  &:hover {
    color: #ffffff;
    transition: 0.3s ease-out;
  }
`;

const SocialMedia = styled.section`
  width: 100%;
`;

const SocialMediaWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 40px auto 0 auto;

  @media screen and (max-width: 820px) {
    flex-direction: column;
    align-items: start;
  }
`;

const SocialLogo = styled(Link)`
  color: #fff;
  justify-self: start;
  cursor: pointer;
  text-decoration: none;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  font-weight: bold;
`;

const WebsiteRights = styled.small`
  color: #fff;
  margin-bottom: 16px;
`;

const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 240px;
`;

const SocialIconLink = styled.a`
  color: #fff;
  font-size: 24px;
`;

const Footer = () => {
    return (
        <FooterContainer>
            <Container>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>Company</FooterLinkTitle>
                            <FooterLink to='/sign-up'>About us</FooterLink>
                            <FooterLink to='/'>Careers</FooterLink>
                            <FooterLink to='/'>Corporate</FooterLink>
                            <FooterLink to='/'>Investors</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>Contact</FooterLinkTitle>
                            <FooterLink to='/'>Contact</FooterLink>
                            <FooterLink to='/'>Support</FooterLink>
                            <FooterLink to='/'>Business</FooterLink>
                            <FooterLink to='/'>Marketing</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>Socials</FooterLinkTitle>
                            <FooterLink to='/'>Twitter</FooterLink>
                            <FooterLink to='/'>Facebook</FooterLink>
                            <FooterLink to='/'>LinkedIn</FooterLink>
                            <FooterLink to='/'>Instagram</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>Platform</FooterLinkTitle>
                            <FooterLink to='/'>API</FooterLink>
                            <FooterLink to='/'>Terms</FooterLink>
                            <FooterLink to='/'>Cookies</FooterLink>
                            <FooterLink to='/'>Privacy</FooterLink>
                            <FooterLink to='/'>Security</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to='/'>
                            Logo
                        </SocialLogo>
                        <WebsiteRights>2020 All rights reserved.</WebsiteRights>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
            </Container>
        </FooterContainer>
    );
};

export default Footer
