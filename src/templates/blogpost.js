import React from "react"
import { graphql } from "gatsby"
import PageHeader from "../components/PageHeader";
import Layout from "../components/Layout";
import Container from "../components/Container";
export default function Template({
                                     data, // this prop will be injected by the GraphQL query below.
                                 }) {
    const { markdownRemark } = data // data.markdownRemark holds your post data
    const { frontmatter, html } = markdownRemark
    return (
        <Layout>
            <Container>
                <div className="blog-post-container">
                    <div className="blog-post">
                        <PageHeader title={frontmatter.title} heading2={'Published'} text2={frontmatter.date}/>
                        <div
                            className="blog-post-content"
                            dangerouslySetInnerHTML={{ __html: html }}
                        />
                    </div>
                </div>
            </Container>
        </Layout>
    )
}
export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`