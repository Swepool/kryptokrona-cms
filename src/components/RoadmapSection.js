import * as React from 'react'
import styled from "@emotion/styled";

const Section = styled.div`
  background-color: #1d1d1d;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 100px 0;
`

const Wrapper = styled.div`
  box-sizing: border-box;
  padding: 0 40px;
  width: 100%;
  max-width: 1400px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  gap: 40px;
  transition: all 250ms;

  @media screen and (max-width: 579px) {
    padding: 0 20px;
  }
  
`

const CardCompleted = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 20px;
  border: 2px solid #5ff281;;
  height: 200px;
  width: 22%;
  border-radius: 8px;
  transition: all 250ms;

  @media screen and (max-width: 1079px) {
    width: 30%;
  }

  @media screen and (max-width: 879px) {
    width: 46%;
  }

  @media screen and (max-width: 579px) {
    width: 100%;
  }
`

const CardOngoing = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 20px;
  background-color: transparent;
  height: 200px;
  width: 22%;
  border-radius: 8px;
  transition: all 250ms;
  border: 1px solid rgba(255, 255, 255, 0.5);

  @media screen and (max-width: 1079px) {
    width: 30%;
  }

  @media screen and (max-width: 879px) {
    width: 46%;
  }

  @media screen and (max-width: 579px) {
    width: 100%;
  }
`

const TitleOngoing = styled.h3`
  margin: 0;
  font-weight: 200;
  color: rgba(255, 255, 255, 0.6);
`

const TitleDone = styled.h3`
  margin: 0;
  font-weight: 200;
  color: #ffffff;
`

const ProgressWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const ProgressTitleDone = styled.p`
  font-family: 'Roboto Mono', monospace;
  color: rgba(255, 255, 255, 0.6);
  margin-bottom: 5px;
`

const ProgressTitleOngoing = styled.p`
  font-family: 'Roboto Mono', monospace;
  color: rgba(255, 255, 255, 0.5);
  margin-bottom: 5px;
  margin-left: 5px;
`

const ProgressBar = styled.div`
  display: flex;
  align-items: center;
  height: 14px;
  width: 100%;
  box-sizing: border-box;
  background-color: rgba(0, 0, 0, 0.71);
  border-radius: 28px;
  padding: 0 2px;
`

const Progress = styled.div`
  height: 10px;
  border-radius: 20px;
  background-color: #5ff281;
`

const Title = styled.h2`
  color: rgba(255, 255, 255, 0.5);
  font-weight: 400;
  margin-bottom: 100px;
`

const RoadmapSection = () => {
    return(
        <Section>
            <Title>Roadmap</Title>
            <Wrapper>

                <CardOngoing>
                    <TitleOngoing>Burn Messages</TitleOngoing>
                    <ProgressWrapper>
                        <ProgressTitleOngoing>Planned</ProgressTitleOngoing>
                        <ProgressBar>
                            <Progress className="progress" style={{width: "0%"}}>
                            </Progress>
                        </ProgressBar>
                    </ProgressWrapper>
                </CardOngoing>

                <CardOngoing>
                    <TitleOngoing>Multicoin Wallet</TitleOngoing>
                    <ProgressWrapper>
                        <ProgressTitleOngoing>Planned</ProgressTitleOngoing>
                        <ProgressBar>
                            <Progress className="progress" style={{width: "0%"}}>
                            </Progress>
                        </ProgressBar>
                    </ProgressWrapper>
                </CardOngoing>

                <CardOngoing>
                    <TitleOngoing>Hugin TV</TitleOngoing>
                    <ProgressWrapper>
                        <ProgressTitleOngoing>Planned</ProgressTitleOngoing>
                        <ProgressBar>
                            <Progress className="progress" style={{width: "0%"}}>
                            </Progress>
                        </ProgressBar>
                    </ProgressWrapper>
                </CardOngoing>

                <CardOngoing>
                    <TitleOngoing>Hugin Mobile</TitleOngoing>
                    <ProgressWrapper>
                        <ProgressTitleOngoing>Android Beta</ProgressTitleOngoing>
                        <ProgressBar>
                            <Progress className="progress" style={{width: "40%"}}>
                            </Progress>
                        </ProgressBar>
                    </ProgressWrapper>
                </CardOngoing>

                <CardOngoing>
                    <TitleOngoing>NFT Avatars</TitleOngoing>
                    <ProgressWrapper>
                        <ProgressTitleOngoing>Close</ProgressTitleOngoing>
                        <ProgressBar>
                            <Progress className="progress" style={{width: "80%"}}>
                            </Progress>
                        </ProgressBar>
                    </ProgressWrapper>
                </CardOngoing>

                <CardOngoing>
                    <TitleOngoing>Hashtags</TitleOngoing>
                    <ProgressWrapper>
                        <ProgressTitleOngoing>Close</ProgressTitleOngoing>
                        <ProgressBar>
                            <Progress className="progress" style={{width: "80%"}}>
                            </Progress>
                        </ProgressBar>
                    </ProgressWrapper>
                </CardOngoing>

                <CardOngoing>
                    <TitleOngoing>Munin Upgrade</TitleOngoing>
                    <ProgressWrapper>
                        <ProgressTitleOngoing>Ready</ProgressTitleOngoing>
                        <ProgressBar>
                            <Progress className="rgb" style={{width: "100%"}}>
                            </Progress>
                        </ProgressBar>
                    </ProgressWrapper>
                </CardOngoing>

                <CardCompleted>
                    <TitleDone>Hugin Whitepaper</TitleDone>
                    <ProgressWrapper>
                        <ProgressTitleDone>Done</ProgressTitleDone>
                        <ProgressBar>
                            <Progress style={{width: "100%"}}>
                            </Progress>
                        </ProgressBar>
                    </ProgressWrapper>
                </CardCompleted>

                <CardCompleted>
                    <TitleDone>Sealed boxes</TitleDone>
                    <ProgressWrapper>
                        <ProgressTitleDone>Done</ProgressTitleDone>
                        <ProgressBar>
                            <Progress style={{width: "100%"}}>
                            </Progress>
                        </ProgressBar>
                    </ProgressWrapper>
                </CardCompleted>

                <CardCompleted>
                    <TitleDone>Hugin Share</TitleDone>
                    <ProgressWrapper>
                        <ProgressTitleDone>Done</ProgressTitleDone>
                        <ProgressBar>
                            <Progress style={{width: "100%"}}>
                            </Progress>
                        </ProgressBar>
                    </ProgressWrapper>
                </CardCompleted>

                <CardCompleted>
                    <TitleDone>Hugin Boards</TitleDone>
                    <ProgressWrapper>
                        <ProgressTitleDone>Done</ProgressTitleDone>
                        <ProgressBar>
                            <Progress style={{width: "100%"}}>
                            </Progress>
                        </ProgressBar>
                    </ProgressWrapper>
                </CardCompleted>

                <CardCompleted>
                    <TitleDone>Hugin Voice</TitleDone>
                    <ProgressWrapper>
                        <ProgressTitleDone>Done</ProgressTitleDone>
                        <ProgressBar>
                            <Progress style={{width: "100%"}}>
                            </Progress>
                        </ProgressBar>
                    </ProgressWrapper>
                </CardCompleted>


            </Wrapper>
        </Section>
    )
}

export default RoadmapSection