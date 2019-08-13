import React from "react"
import { Link } from "gatsby"
import Typed from "typed.js"

import Layout from "../components/layout"
import SEO from "../components/seo"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import {
  faLinkedin,
  faGithub,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons"

import "../styles/home.css"

class IndexPage extends React.Component {
  componentDidMount() {
    var options = {
      strings: [
        "Hi, I'm <span class='glitch' data-text='maikmacs'>maikmacs</span>.<br />I'm a Software engineer.",
      ],
      showCursor: false,
      typeSpeed: 40,
    }

    new Typed("#home-text", options)
  }

  render() {
    return (
      <Layout>
        <SEO title="Home" />
        <div id="window">
          <div id="home-text"></div>
          <div id="icons">
            <a
              href="https://linkedin.com/in/miguel-angel-contreras-sanchez-a1990674/"
              target="_blank"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a href="https://github.com/maikmacs" target="_blank">
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a href="https://www.instagram.com/maikmacs/" target="_blank">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="mailto:hola@maikmacs.com?subject=Hola Maik!">
              <FontAwesomeIcon icon={faEnvelope} />
            </a>
          </div>
        </div>
      </Layout>
    )
  }
}

export default IndexPage
