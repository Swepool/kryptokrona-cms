import React from 'react';
import BorderButton from "./BorderButton";
import ImageBackground from '../assets/images/sunset.png'

import styled from "@emotion/styled";

export const HeroContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: start;
  margin-top: -120px;
`;

export const Hero = styled.div`
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const HeroBg = styled.img`
  width: 100%;
  height: 100vh;
  -o-object-fit: cover;
  object-fit: cover;
  background: #ffffff;
`;


export const HeroContent = styled.div`
  z-index: 3;
  margin-top: 200px;
  position: absolute;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  align-items: start;
`;

export const HeroH1 = styled.h1`
  color: #2a2a2a;
  font-size: 64px;
  margin: 0;
  transition: all 300ms ease-in-out;

  @media screen and (max-width: 768px) {
    font-size: 48px;
    transition: all 300ms ease-in-out;
  }

  @media screen and (max-width: 480px) {
    font-size: 36px;
    transition: all 300ms ease-in-out;
  }
`;

export const HeroP = styled.p`
  color: #2a2a2a;
  font-size: 24px;
  max-width: 600px;
  transition: all 300ms ease-in-out;
  

  @media screen and (max-width: 768px) {
    font-size: 24px;
    transition: all 300ms ease-in-out;
  }

  @media screen and (max-width: 480px) {
    font-size: 18px;
    transition: all 300ms ease-in-out;
  }
`;
export const HeroBtnWrapper = styled.div`
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const HeroSection = () => {
    return (
        <HeroContainer>
            <Hero>
                <HeroBg src={ImageBackground} />
            </Hero>
            <HeroContent>
                <HeroH1>Buy Bitcoin and Crypto with ease.</HeroH1>
                <HeroP>
                    Invest in your future. Trade Bitcoin, Ethereum, and other tokens
                    using NOK, SEK, DKK & EUR
                </HeroP>
                <HeroBtnWrapper>
                    <BorderButton label={'Sign up'}></BorderButton>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    );
}


export default HeroSection;
