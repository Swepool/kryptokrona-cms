import * as React from "react";
import Layout from "../components/Layout";
import Container from "../components/Container";
import BorderCard from "../components/BorderCard";
import styled from "@emotion/styled";
import IndexBanner from "../components/Banner";
import CheckIcon from '../assets/icons/Check.svg'
import ChecksIcon from '../assets/icons/Coins.svg'
import TradeIcon from '../assets/icons/Trade-Done.svg'
import AvatarIcon from '../assets/icons/Avatar.svg'
import StatsIcon from '../assets/icons/Stats.svg'
import ExpertIcon from '../assets/icons/expert.svg'
import HeroSection from "../components/HeroSection";
import InfoSection from "../components/InfoSection";



const CardWrapper = styled.div`
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

const index = () => {
    return (
        <Layout>
            <HeroSection/>
            <InfoSection
                    title={'Easy as 1 2 3'}
                    heading={'Creating an account is extremely easy'}
                    text={"Get everything set up and ready in under 10 minutes. All you need to do is add your information and you're ready to go"}
                    btntext={'Lets go'}
                    url={'https://google.se'}
                    img='../assets/images/icon.png'
                />
            <Container>
                <CardWrapper>
                    <BorderCard icon={AvatarIcon} title={'First time'} text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}/>
                    <BorderCard icon={ExpertIcon} title={'Expert'} text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}/>
                    <BorderCard icon={StatsIcon} title={'Corporate'} text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}/>
                </CardWrapper>
            </Container>
            <IndexBanner/>
            <Container>
                <CardWrapper>
                    <BorderCard icon={CheckIcon} title={'Register'} text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'} />
                    <BorderCard icon={ChecksIcon} title={'Verify'} text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'} />
                    <BorderCard icon={TradeIcon} title={'Trade'} text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'} />
                </CardWrapper>
            </Container>
        </Layout>
    );
};

export default index;
