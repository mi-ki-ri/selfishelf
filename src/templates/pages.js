import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import {List, ListItem, ListItemText} from "@material-ui/core"

export default ({ data, pageContext }) => {


  const BlogIndex = (props) => {
    return (
      <div>
        <Link to={props.pageContext.previousPagePath}>Previous</Link> /
        <Link to={props.pageContext.nextPagePath}>Next</Link>
      </div>
    )
  }



  return (
    <Layout>
      <h2>Posts</h2>
      <List>
        {data.allWordpressPost.edges.map(({ node }) => (
          <Link to={"posts/" + node.id}>
            <ListItem alignItems="flex-start">
              <ListItemText
                primary={node.title}
                secondary={
                  <div dangerouslySetInnerHTML={{ __html: node.excerpt }} />
                }

              />
            </ListItem>
          </Link>
        ))}
      </List>
      <BlogIndex pageContext={pageContext} />

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