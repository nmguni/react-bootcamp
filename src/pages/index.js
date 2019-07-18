import React from "react"
import { Link } from "gatsby"

import Header from "../components/header"
import Footer from "../components/footer"

const IndexPage = () => {
  return (
    <div>
      <Header />
      <h1>Hello</h1>
      <p>I am dave Living in Canada</p>
      <p>
        Need a Dev<Link to="/contact"> Contact Me.</Link>
      </p>
      <Footer />
    </div>
  )
}

export default IndexPage
