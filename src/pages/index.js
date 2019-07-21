import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

const IndexPage = () => {
  return (
    <Layout>
      <h1>Hello</h1>
      <p>I am dave Living in Canada</p>
      <p>
        Need a Dev<Link to="/contact"> Contact Me.</Link>
      </p>
    </Layout>
  )
}

export default IndexPage
