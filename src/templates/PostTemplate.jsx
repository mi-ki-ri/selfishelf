import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import styled from "styled-components"

export default ({ data }) => {
  // Create reference instance
  const marked = require('marked');
  
  const story = data.allWordpressPost.edges[0].node
  
  const story2 = story.content.substring(3)
  const story3 = story2.substring(-4) 
  
  const splitted = story3.split("<br />")
  
  var txt = ""
  splitted.forEach(element => {
    txt += element
  });
  
  const mkContent = marked( txt );
  
  

  return (
    <Layout>
      <h2>{story.title}</h2>
      <div>
        <div
          dangerouslySetInnerHTML={{ __html: mkContent }}
          
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
