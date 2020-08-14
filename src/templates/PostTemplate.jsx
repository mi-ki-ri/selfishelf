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
query MyQuery {
  allWordpressPost(filter: {id: {eq: "615035f4-df60-534a-861a-3d47e53d5d3f"}}) {
    edges {
      node {
        date
        content
        title
        
      }
    }
  }
}`