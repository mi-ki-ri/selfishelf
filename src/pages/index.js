import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { List, ListItem, ListItemText, Typography, ListItemSecondaryAction } from "@material-ui/core"

export default ({ data }) => {
  return (
    <Layout>
      <SEO title="home" />
      <h2>Posts</h2>
      <List>
        {data.allWordpressPost.edges.map(({ node }) => (
          <Link to={"posts/" + node.id}>
            <ListItem alignItems="flex-start">
              <ListItemText
                primary={ node.date + ": " + node.title}
                secondary={
                  <div dangerouslySetInnerHTML={{ __html: node.excerpt }} />
                }

              />
            </ListItem>
          </Link>
        ))}
      </List>
      <Link to={"pages/2"} dangerouslySetInnerHTML={{ __html: "next" }}></Link>

    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    allWordpressPost(sort: { fields: [date] }) {
      edges {
        node {
          title
          excerpt
          slug
          id
          date
        }
      }
    }
  }`