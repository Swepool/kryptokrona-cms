import * as React from 'react'
import Layout from "../components/Layout";
import Container from "../components/Container";
import styled from "@emotion/styled";
import PageHeader from "../components/PageHeader";
import BlogRoll from "../components/BlogRoll";

const BlogWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 40px;
  flex-wrap: wrap;
`;


const Blog = () => {
    return(
        <Layout>
            <Container>
                <PageHeader
                    title={'This is where we tell stories'}
                    heading1={'Posts'}
                    text1={'7'}
                    heading2={'Categories'}
                    text2={'5'}
                    heading3={'Authors'}
                    text3={'3'}
                />
                <BlogWrapper>
                    <BlogRoll/>
                </BlogWrapper>
            </Container>
        </Layout>
    )
}

export default Blog