import Container from "./Container";
import * as React from "react";
import styled from "@emotion/styled";

const Banner = styled.div`
  padding-top: 50px;
  padding-bottom: 100px;
  background-color: #2a2a2a;
  color: #fff;
`

const BannerWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;

  @media screen and (max-width: 1024px) {
    flex-direction: column;
    text-align: center;
  }
`;

const BannerItem = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  gap: 10px;
  height: 150px;
  max-width: 300px;
  align-self: center;
`

const BannerTitle = styled.h2`
  font-weight: 400;
  font-size: 36px;
  margin: 0;
`

const BannerText = styled.p`
  font-weight: 400;
  font-size: 20px;
  color: rgba(255, 255, 255, 0.8);
  margin: 0;
`;

const IndexBanner = () => {
    return(
        <Banner>
            <Container>
                <BannerWrapper>
                    <BannerItem>
                        <BannerTitle>Low fees</BannerTitle>
                        <BannerText>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua..</BannerText>
                    </BannerItem>
                    <BannerItem>
                        <BannerTitle>Custody</BannerTitle>
                        <BannerText>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</BannerText>
                    </BannerItem>
                    <BannerItem>
                        <BannerTitle>Security</BannerTitle>
                        <BannerText>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</BannerText>
                    </BannerItem>
                    <BannerItem>
                        <BannerTitle>Registered</BannerTitle>
                        <BannerText>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</BannerText>
                    </BannerItem>
                </BannerWrapper>
            </Container>
        </Banner>
    )
}

export default IndexBanner