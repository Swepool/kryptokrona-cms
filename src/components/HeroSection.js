import React from 'react';
import BorderButton from "./BorderButton";

import styled from "@emotion/styled";

export const HeroContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 800px;
`;

export const HeroBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin-top: 80px;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: 1;
`;


export const HeroContent = styled.div`
  z-index: 3;
  position: absolute;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const HeroH1 = styled.h1`
  color: #2a2a2a;
  font-size: 64px;
  text-align: center;
  margin: 0;

  @media screen and (max-width: 768px) {
    font-size: 48px;
  }

  @media screen and (max-width: 480px) {
    font-size: 36px;
  }
`;

export const HeroP = styled.p`
  color: #2a2a2a;
  font-size: 24px;
  text-align: center;
  max-width: 600px;

  @media screen and (max-width: 768px) {
    font-size: 24px;
  }

  @media screen and (max-width: 480px) {
    font-size: 18px;
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
            <HeroBg>
            </HeroBg>
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
