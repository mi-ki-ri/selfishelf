import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import marked from "marked"

export default ({ data }) => {
  const story = data.allWordpressPost.edges[0].node
  
  const mkContent = marked( story.content );
  
  return (
    <Layout>
      <h2>{story.title}</h2>
      <div>
        <div dangerouslySetInnerHTML={{ __html: mkContent }} />
        <p>{story.date}</p>
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
