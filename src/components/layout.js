/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"
import { Container, Grid, Box } from '@material-ui/core';

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>

      <Header siteTitle={data.site.siteMetadata.title} />
      <Box  m={5}></Box>
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          <main>{children}</main>
        </Grid>
        <Box  m={5}></Box>
        <Grid container spacing={3}>
          <footer>
            © {new Date().getFullYear()} Mikirihassha P<address>mi.ki.ri.hassha.p@gmail.com</address> Built with
          {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a>
          </footer>
        </Grid>

      </Container>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
