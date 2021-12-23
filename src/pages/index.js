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
import HeroSection from "../components/HeroSection";


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

  @media screen and (max-width: 425px) {
    font-size: 28px;
  }
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
                <HeroSection/>
                <CardWrapper>
                    <BorderCard icon={AvatarIcon} title={'First time'} text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}></BorderCard>
                    <BorderCard icon={ExpertIcon} title={'Expert'} text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}></BorderCard>
                    <BorderCard icon={StatsIcon} title={'Corporate'} text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}></BorderCard>
                </CardWrapper>

            </Container>

            <IndexBanner/>

            <Container>
                <CardWrapper>
                    <BorderCard icon={CheckIcon} title={'Register'} text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}></BorderCard>
                    <BorderCard icon={ChecksIcon} title={'Verify'} text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}></BorderCard>
                    <BorderCard icon={TradeIcon}title={'Trade'} text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}></BorderCard>
                </CardWrapper>
            </Container>

        </Layout>
    );
};

export default index;
