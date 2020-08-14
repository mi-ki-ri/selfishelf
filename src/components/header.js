import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import {  Typography, Container } from '@material-ui/core';



const Header = ({ siteTitle }) => (
  <Container maxWidth="xl" m={8}>
    <Typography variant="h1" color="white">
      <Link to="/">
        {siteTitle}
      </Link>

    </Typography>
  </Container>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
