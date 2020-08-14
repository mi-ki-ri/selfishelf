import React from "react"
import { graphql } from "gatsby"

export default ({ data }) => {
  const story = data.allWordpressPost.edges[0].node
  return (
    <div>
      <h1>{story.title}</h1>
      <div>
        <div dangerouslySetInnerHTML={{ __html: story.content }} />
      </div>
    </div>
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