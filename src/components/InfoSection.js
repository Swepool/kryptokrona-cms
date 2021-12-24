import * as React from 'react'
import styled from "@emotion/styled";
import BorderButton from "./BorderButtonWhite";

const WrapperSection = styled.div`
  background-color: #2a2a2a;
  width: 100%;
`

const WrapperContainer = styled.div`
  display: grid;
  z-index: 1;
  width: auto;
  max-width: 1440px;
  padding: 100px 20px;
  justify-content: center;
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  max-width: 1440px;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`

const Column1 = styled.div`
  margin-bottom: 15px;
    width: 50%;

  @media screen and (max-width: 768px) {
    margin-bottom: 15px;
    width: 100%;
  }
`

const Column2 = styled.div`


  @media screen and (max-width: 768px) {
    width: 100%;
  }
`

const TextWrapper = styled.div`
    max-width: 600px;
`

const Title = styled.div`
    color: #BEED5E;
  font-size: 20px;
`

const Heading = styled.h2`
  color: #ffffff;
`

const Text = styled.p`
  color: #ffffff;
`

const ImageWrapper = styled.div`
  max-width: 555px;
  height: 100%;
`

const Image = styled.img`
  width: 100%;
`

const InfoSection = ({ title, heading, text, btntext, url, img }) => {
    return(
        <WrapperSection>
            <WrapperContainer>
                <Wrapper>
                    <Column1>
                        <TextWrapper>
                            <Title>{title}</Title>
                            <Heading>{heading}</Heading>
                            <Text>{text}</Text>
                            <BorderButton text={btntext} url={url}/>
                        </TextWrapper>
                    </Column1>
                    <Column2>
                        <Image src={img} />
                    </Column2>
                </Wrapper>
            </WrapperContainer>
        </WrapperSection>
    )
}

export default InfoSection