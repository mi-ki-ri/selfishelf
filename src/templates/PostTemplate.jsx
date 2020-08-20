import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"


export default ({ data }) => {
  // Create reference instance
  const marked = require('marked');
  
  const story = data.allWordpressPost.edges[0].node
  
  const mkContent = marked( story.content );
  
  const mdClass = css`
    & strong::before{content:"**";}
    & strong::after{content:"**";}
    & em::before{content: "*";}
    & em::after{content: "*";}
    
    & code::before{content:"\`";}
    & code::after{content:"\`;}
    
  `
  
  
  return (
    <Layout>
      <h2>{story.title}</h2>
      <div>
        <div
          dangerouslySetInnerHTML={{ __html: mkContent }}
          className={mdClass}
        />
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
