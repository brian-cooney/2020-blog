import React from 'react';
import Layout from '../components/Layout';
import Container from "components/Container";


const About = ({ data: { site } }) => {
    return (
        <Layout site={site}>
            <Container>
                <p>
                "Digital fabrication tools and the maker movement were my gateway
                drugs into web development. Coming from a background in furniture and
                product design, I've swapped my chisel for a text editor! <br /> To
                Kickstart my new career in software craftsmanship, in early 2017, I
                chose to study with General Assembly on their 3 Month
                <a href="https://generalassemb.ly/education/web-development-immersive">
                    Software Engineering Immersive.
                </a>
                &nbsp;Since that incredible experience I have worked for a top&nbsp;
                <a href="http://www.wcrs.com/">agency</a> and SAAS product&nbsp;
                <a href="http://www.brandworkz.com/">company</a>
                &nbsp; building on my skill as developer. <br />
            </p>
            </Container>
        </Layout>
  )
}

export default About;

export const pageQuery = graphql`
  query {
    site {
      ...site
      siteMetadata {
        title
      }
    }
    allMdx(
      limit: 5
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { published: { ne: false } } }
    ) {
      edges {
        node {
          excerpt(pruneLength: 190)
          id
          fields {
            title
            slug
            date
          }
          parent {
            ... on File {
              sourceInstanceName
            }
          }
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            description
            banner {
              childImageSharp {
                sizes(maxWidth: 720) {
                  ...GatsbyImageSharpSizes
                }
              }
            }
            slug
            keywords
          }
        }
      }
    }
  }
`