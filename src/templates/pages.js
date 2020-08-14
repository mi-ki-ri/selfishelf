import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

export default ({ data, pageContext }) => {


  const BlogIndex = (props) => {
    return (
      <div>
        <div>
          <Link to={props.pageContext.previousPagePath}>Previous</Link> / 
          <Link to={props.pageContext.nextPagePath}>Next</Link>
        </div>
      </div>
    )
  }



  return (
    <Layout>
      <SEO title="home" />
      <h1>My WordPress Blog</h1>
      <h4>Posts</h4>
      {data.allWordpressPost.edges.map(({ node }) => (
        <div>
          <Link to={"posts/" + node.id}>
            <p>{node.title}</p>
          </Link>
          <div dangerouslySetInnerHTML={{ __html: node.excerpt }} />
        </div>
      ))}
      <BlogIndex pageContext={pageContext}></BlogIndex>
    </Layout>
  )
}

export const pageQuery = graphql`
  query ($skip: Int!, $limit: Int!) {
    allWordpressPost(
        sort: { fields: [date] }
        skip: $skip
        limit: $limit
        
    ) {
      edges {
        node {
          title
          excerpt
          slug
          id
        }
      }
    }
  }`