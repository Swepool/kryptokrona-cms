import * as React from "react";
import Layout from "../components/Layout";
import Container from "../components/Container";
import BorderCard from "../components/BorderCard";
import styled from "@emotion/styled";
import BorderButton from "../components/BorderButton";
import FillButton from "../components/FillButton";
import IndexBanner from "../components/Banner";
import CheckIcon from '../assets/icons/Check.svg'
import ChecksIcon from '../assets/icons/Coins.svg'
import TradeIcon from '../assets/icons/Trade-Done.svg'
import AvatarIcon from '../assets/icons/Avatar.svg'
import StatsIcon from '../assets/icons/Stats.svg'
import ExpertIcon from '../assets/icons/expert.svg'
import {Link} from "gatsby";


const LandingDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 500px;
  justify-content: center;
  text-align: center;
`;

const Title = styled.h1` 
  font-size: 84px;
  font-weight: 500;
  line-height: 115%;
  margin-bottom: 10px;

  @media screen and (max-width: 1024px) {
    font-size: 64px;
  }

  @media screen and (max-width: 425px) {
    font-size: 48px;
  }
`;

const Text = styled.h2`
  font-weight: 400;
  margin: 0;
`;

const CardWrapper = styled.div`
  width: 100%;
  padding-top: 100px;
  padding-bottom: 100px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  gap: 10px;
  
  @media screen and (max-width: 1024px) {
    flex-direction: column;
    gap: 40px;
  }
`

const ButtonWrapper = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  gap: 10px;
  justify-content: center;
`

const index = () => {
    return (
        <Layout>
            <Container>
                <LandingDiv>
                    <div>
                        <Title>
                            Buy Bitcoin and Crypto with ease.
                        </Title>
                        <p><Link to="/blog">View Blog</Link></p>
                        <Text>
                            Invest in your future. Trade Bitcoin, Ethereum, and other tokens
                            using NOK, SEK, DKK & EUR
                        </Text>
                        <ButtonWrapper>
                            <BorderButton text={'Get started'}/>
                            <FillButton text={'Learn more'}/>
                        </ButtonWrapper>
                    </div>
                </LandingDiv>



                <CardWrapper>
                    <BorderCard icon={AvatarIcon} title={'First time'} text={'Whether you’re an expert or just getting started, we got everything you need to buy, sell or store your digital assets.'}></BorderCard>
                    <BorderCard icon={ExpertIcon} title={'Expert'} text={'Enjoy easier access to the most popular and emerging cryptocurrencies through an intuitive interface.'}></BorderCard>
                    <BorderCard icon={StatsIcon} title={'Corporate'} text={'Put BTC on your companys balance sheet or just simply invest in crypto.'}></BorderCard>
                </CardWrapper>

            </Container>

            <IndexBanner/>

            <Container>
                <CardWrapper>
                    <BorderCard icon={CheckIcon} title={'Register'} text={'To start your journey you first have to sign up to our platform, it only takes a couple of minutes.'}></BorderCard>
                    <BorderCard icon={ChecksIcon} title={'Verify'} text={'To make a deposit we first have to verify you ID. Verification should not take long, this helps to secure your account.'}></BorderCard>
                    <BorderCard icon={TradeIcon}title={'Trade'} text={'Now your journey begins, enjoy our platforms features and low fees. Need help? Let us know.'}></BorderCard>
                </CardWrapper>
            </Container>

        </Layout>
    );
};

export default index;
