import React from "react"
import { Link } from "gatsby"

import Header from "../components/header"
import Footer from "../components/footer"

const About = () => {
  return (
    <div>
      <Header />
      <h1>About ME</h1>
      <p>Hello my name is goku and I'm the strongest syain</p>
      <p>
        {" "}
        <Link to="/contact">Contact Me</Link>{" "}
      </p>
      <Footer />
    </div>
  )
}

export default About
