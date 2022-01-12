import * as React from 'react'
import styled from "@emotion/styled";
import ArtImg from '../images/mining.png';
import Fillbutton from "../components/buttons/Button";
import Borderbutton from "../components/buttons/Borderbutton";
import Layout from "../components/Layout";
import {FaApple, FaLinux, FaWindows} from "react-icons/all";
import GenerateConfig from "../components/GenerateConfig";


const Section = styled.div`
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: start;
  width: 100%;
  background-color: #1d1d1d;
  padding-top: 15em;
  padding-bottom: 10em;

  @media screen and (max-width: 579px) {
    padding-top: 12em;
  }
`

const Container = styled.div`
  max-width: 1400px;
  padding: 0 40px;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 400px) {
    padding: 0 20px;
  }

  @media screen and (max-width: 1000px) {
    flex-direction: column;
  }
`

const ContentWrapper= styled.div`
    max-width: 40%;
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media screen and (max-width: 1000px) {
    text-align: center;
    max-width: 100%;
    order: 1;
    justify-content: center;
    align-items: center;
    padding-right: 0;
  }
`
const Title = styled.h1`
  color: rgb(255, 255, 255);
  font-weight: 200;
  margin: 0;
`

const Text = styled.p`
  font-family: 'Roboto Mono', monospace;
  color: rgba(255, 255, 255, 0.5);
  line-height: 1.75rem;
  margin: 0;
`

const ButtonWrapper = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  gap: 20px;

  @media screen and (max-width: 1000px) {
    justify-content: center;
  }
`

const Art = styled.img`
  max-width: 500px;
  width: 100%;
  margin-bottom: 2rem;
`

const Hero = () => {
    return (
        <Layout>
            <Section>
                <Container>
                    <ContentWrapper>
                        <Title>Choose your OS</Title>
                        <Text>You need to replace the Config.json file after you’ve downloaded the mining software for your OS. You can generate one below.</Text>
                        <ButtonWrapper>
                            <a id='latest_win' href='/#'><FaWindows aria-label="Download Windows" size="3em" color="#979797"/></a>
                            <a id='latest_mac' href='/#'><FaApple  aria-label="Download MacOS" size="3em" color="#979797"/></a>
                            <a id='latest_lin' href='/#'><FaLinux aria-label="Download Linux" size="3em" color="#979797"/></a>
                        </ButtonWrapper>
                        <GenerateConfig/>
                    </ContentWrapper>
                    <Art src={ArtImg}/>
                </Container>
            </Section>
        </Layout>
    )
}

export default Hero