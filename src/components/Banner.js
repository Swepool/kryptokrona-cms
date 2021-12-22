import Container from "./Container";
import * as React from "react";
import styled from "@emotion/styled";

const Banner = styled.div`
  padding-top: 50px;
  padding-bottom: 50px;
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
                        <BannerText>Deposits are free, as we only charge a fee of 0.5% when trading.</BannerText>
                    </BannerItem>
                    <BannerItem>
                        <BannerTitle>Custody</BannerTitle>
                        <BannerText>Any crypto stored in Ledger Cold Wallet is also insured.</BannerText>
                    </BannerItem>
                    <BannerItem>
                        <BannerTitle>Security</BannerTitle>
                        <BannerText>NBX is registered with The Financial Supervisory Authority of Norway.</BannerText>
                    </BannerItem>
                    <BannerItem>
                        <BannerTitle>Registered</BannerTitle>
                        <BannerText>Get free Bitcoin by helping us getting more people to NBX.</BannerText>
                    </BannerItem>
                </BannerWrapper>
            </Container>
        </Banner>
    )
}

export default IndexBanner