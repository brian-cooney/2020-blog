import React from 'react'
import Layout from '../components/Layout'
import Container from 'components/Container'

const About = ({ data: { site } }) => {
  return (
    <Layout site={site}>
      <Container>
        <p>
          Digital fabrication tools and the maker movement were my gateway drugs
          into web development. Coming from a background in furniture making and
          product design, I've swapped my chisel for a text editor! <br />
          <br />
          To Kickstart my new career in tech, I studied at General Assembly
          London on their 3 Month{' '}
          <a href="https://generalassemb.ly/education/web-development-immersive">
            Software Engineering Immersive in 2017.
          </a>
          &nbsp;Since that incredible experience I have worked for a top&nbsp;
          <a href="http://www.wcrs.com/">agency</a> and SAAS product{' '}
          <a href="http://www.brandworkz.com/">company.</a>
          <br />
          Right now, I'm working with{' '}
          <a href="https://www.crowdform.co.uk/" target="blank">
            nutmeg.com
          </a>{' '}
          a digital wealth manager. <br />
          Apart from my passion for startups and development, I also love making
          electronic music, riding bikes, design & architecture
        </p>
      </Container>
    </Layout>
  )
}

export default About

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
