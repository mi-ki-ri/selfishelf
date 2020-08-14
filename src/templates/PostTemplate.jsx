import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

export default ({ data }) => {
  const story = data.allWordpressPost.edges[0].node
  return (
    <Layout>
      <h2>{story.title}</h2>
      <div>
        <div dangerouslySetInnerHTML={{ __html: story.content }} />
      </div>
    </Layout>
  )
}

export const query = graphql`
query MyQuery($id: String!) {
  allWordpressPost(filter: {id: {eq: $id}}) {
    edges {
      node {
        date
        content
        title
        
      }
    }
  }
}`