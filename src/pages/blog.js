import * as React from 'react'
import Layout from "../components/Layout";
import Container from "../components/Container";
import PageHeader from "../components/PageHeader";
import BlogRoll from "../components/BlogRoll";



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
                    <BlogRoll/>
            </Container>
        </Layout>
    )
}

export default Blog