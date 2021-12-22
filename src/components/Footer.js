import * as React from 'react'
import Container from "./Container";
import styled from "@emotion/styled";
import {Link} from "gatsby";
import LogoLight from '../assets/images/Logo-White.svg'

const FooterStyle = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 140px;
  background-color: #2a2a2a;
  color: #ffffff80;
`;

const FooterContainer = styled.div`
  width: 100%;
  padding-top: 100px;
  padding-bottom: 40px;
  display: flex;
  flex-direction: column;
  justify-content: end;
`;

const RightDiv = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 40px;
  align-items: start;

  @media screen and (max-width: 475px) {
    flex-direction: column;
    gap: 10px;
  }
`;

const List = styled.ul`
  padding: 0;
  margin: 0;
`;

const ListContainer = styled.div`
  display: flex;
  gap: 40px;

  @media screen and (max-width: 475px) {
    flex-direction: column;
    gap: 0px
  }
`;

const ListItem = styled.li`
  list-style-type: none;
  padding-top: 5px;
  padding-bottom: 5px;
  margin: 0;
  color: rgba(255, 255, 255, 0.49);

  &:hover {
    transition: 200ms;
    color: #fff;
    cursor: pointer;
  }
`

const Title = styled.h3`
    color: #fff;
  font-weight: 400;
  margin: 0;
  margin-bottom: 10px;
  @media screen and (max-width: 475px) {

  }
`

const Brand = styled.img`
  margin: 0;
`

const Footer = () => {
    return (
        <FooterStyle>
            <Container>
                <FooterContainer>
                    <RightDiv>
                        <div>
                            <Brand src={LogoLight} alt={'NBX logo'}/>
                            <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignText:'center'}}>
                                <div style={{display: 'flex', gap: 10, margin: 0}}>
                                    <p>Terms</p>
                                    <p>Privacy</p>
                                    <p>Cookies</p>
                                </div>
                                <p style={{margin: 0}}>© 2021. All rights reserved.</p>
                            </div>
                        </div>
                        <ListContainer>
                            <List>
                                <Title>Company</Title>
                                <Link to='/about'><ListItem>About</ListItem></Link>
                                <Link to='/careers'><ListItem>Careers</ListItem></Link>
                                <Link to='/investors'><ListItem>Investors</ListItem></Link>
                                <Link to='/corporate'><ListItem>Corporate</ListItem></Link>
                            </List>
                            <List>
                                <Title>Info</Title>
                                <Link to='/blog'><ListItem>Blog</ListItem></Link>
                                <Link to='/#'><ListItem>Learn</ListItem></Link>
                                <Link to='/#'><ListItem>News</ListItem></Link>
                            </List>
                            <List>
                                <Title>Platform</Title>
                                <Link to='https://api.nbx.com/'><ListItem>API</ListItem></Link>
                                <Link to='/#'><ListItem>Security</ListItem></Link>
                                <Link to='/#'><ListItem>Support</ListItem></Link>
                            </List>
                        </ListContainer>
                    </RightDiv>
                </FooterContainer>
            </Container>
        </FooterStyle>
    )
}

export default Footer