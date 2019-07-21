import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

const About = () => {
  return (
    <Layout>
      <h1>About ME</h1>
      <p>Hello my name is goku and I'm the strongest syain</p>
      <p>
        {" "}
        <Link to="/contact">Contact Me</Link>{" "}
      </p>
    </Layout>
  )
}

export default About
