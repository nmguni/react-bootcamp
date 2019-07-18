import React from "react"
import Footer from "../components/footer"

import Header from "../components/header"
const Contact = () => {
  return (
    <div>
      <Header />
      <h1>Contact Me</h1>
      <p>You can contact me at goku@gmail.com</p>
      <p>
        Follow me on{" "}
        <a href="https://twitter.com" target="_blank">
          Twitter
        </a>{" "}
      </p>
      <Footer />
    </div>
  )
}

export default Contact
