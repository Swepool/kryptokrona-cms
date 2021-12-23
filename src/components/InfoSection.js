import * as React from 'react'
import Container from "./Container";
import styled from "@emotion/styled";
import BorderButton from "./BorderButtonWhite";

const WrapperContainer = styled.div`
    background-color: #2a2a2a;
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }

`

const Column1 = styled.div`

`

const Column2 = styled.div`

`

const Title = styled.div`

`

const Heading = styled.h2`

`

const Text = styled.p`

`

const Image = styled.img`

`

const InfoSection = ({ title, heading, text, btntext, url, img }) => {
    return(
        <WrapperContainer>
            <Container>
                <Wrapper>
                    <Column1>
                        <Title>{title}</Title>
                        <Heading>{heading}</Heading>
                        <Text>{text}</Text>
                        <BorderButton text={{btntext}} url={{url}}/>
                    </Column1>
                    <Column2>
                        <Image src={require({img})}/>
                    </Column2>
                </Wrapper>
            </Container>
        </WrapperContainer>
    )
}

export default InfoSection