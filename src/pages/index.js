import React, { useEffect } from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import Services from "../components/Services"
import Jobs from "../components/Jobs"
import Projects from "../components/Projects"
import Blogs from "../components/Blogs"
import AOS from 'aos'
import 'aos/dist/aos.css'
import SEO from "../components/SEO"

export default ({ data }) => {

  useEffect(() => {
    AOS.init({
      duration: 1500,
    })
    AOS.refresh()
  })

  const {
    allStrapiProjects: { nodes: projects },
    allStrapiBlogs: { nodes: blogs },
  } = data

  return (
    <Layout>
      <SEO title="Home" description="this is our home page" />
      <Hero />
      <div data-aos="fade">
        <Services />
      </div>
      <div data-aos="fade">
        <Jobs />
      </div>
      <div data-aos="fade">
        <Projects projects={projects} title="featured projects" showLink />
      </div>
      <div data-aos="fade">
        <Blogs blogs={blogs} title="My Blogs" showLink />
      </div>
    </Layout>
  )
}

export const query = graphql`
  {
    allStrapiProjects(filter: { featured: { eq: true } }) {
      nodes {
        github
        id
        description
        title
        url
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        stack {
          id
          title
        }
      }
    }
    allStrapiBlogs(sort: { fields: date, order: DESC }, limit: 3) {
      nodes {
        slug
        content
        desc
        date(formatString: "MMMM Do, YYYY")
        id
        title
        category
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
