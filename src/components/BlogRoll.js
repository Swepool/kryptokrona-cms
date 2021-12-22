import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import styled from "@emotion/styled";

const Card = styled.div`
  flex: 1 0 28%;
  border-bottom: 1px solid #2a2a2a;
  

  @media screen and (max-width: 1440px) {
    flex: 1 0 40%;
  }

  @media screen and (max-width: 768px) {
    flex: 1 0 100%;
  }
`;

const BlogImage = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
  overflow: hidden;
`

const Title = styled.h2`
    font-size: 30px;
  margin-top: 0;
`;
const Text = styled.p`
    text-align: justify;
    
`;
const Category = styled.p`
  font-size: 18px;
  color: rgba(42, 42, 42, 0.6);
`;

const Date = styled.p`
    font-size: 16px;
`;

class BlogRoll extends React.Component {
    render() {
        const { data } = this.props;
        const { edges: posts } = data.allMarkdownRemark;

        return (
            <div>
                {posts &&
                    posts.map(({ node: post }) => (
                        <Card key={post.id}>
                            <Link to={post.frontmatter.path}>
                                <Title>{post.frontmatter.title}</Title>
                                <Text>{post.excerpt}</Text>
                                <Date>{post.frontmatter.date}</Date>
                            </Link>
                        </Card>
                    ))}
            </div>
        )
    }
}

BlogRoll.propTypes = {
    data: PropTypes.shape({
        allMarkdownRemark: PropTypes.shape({
            edges: PropTypes.array,
        }),
    }),
};

const query = () => (
    <StaticQuery
        query={graphql`
      query BlogRollQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
        ) {
          edges {
            node {
              excerpt(pruneLength: 400)
              id
              frontmatter {
                path
                title
                date(formatString: "MMMM DD, YYYY")
              }
            }
          }
        }
      }
    `}
        render={(data, count) => <BlogRoll data={data} count={count} />}
    />
)

export default query