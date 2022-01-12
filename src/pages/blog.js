import * as React from 'react'
import Layout from "../components/Layout";
import PageHeader from "../components/PageHeader";
import BlogRoll from "../components/BlogRoll";
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

const Blog = () => {
    return(
        <Layout>
            <Section>
                <Wrapper>
                    <BlogRoll/>
                </Wrapper>
            </Section>
        </Layout>
    )
}

export default Blog