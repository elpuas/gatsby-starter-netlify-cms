import React from 'react'
import Link from 'gatsby-link'

import github from '../img/github-icon.svg'
import logo from '../img/logo.svg'
import { Menu, Segment } from 'semantic-ui-react'

const Navbar = () => (
  <Segment inverted>
    <Menu inverted secondary>
      <div className="navbar-brand">
      <h2>
        <Link to="/" className="navbar-item">
        { /*  <figure className="image">
            <img src={logo} alt="Kaldi" style={{ width: '88px' }} />
          </figure>
          */ }
         Los.Broders
        </Link>
        </h2>
      </div>
      <div className="navbar-start">
        <Link className="navbar-item" to="/about">
          About
        </Link>
        <Link className="navbar-item" to="/products">
          Products
        </Link>
        <Link className="navbar-item" to="/portfolio">
          Portfolio
        </Link>
      </div>
      <div className="navbar-end">
        <a
          className="navbar-item"
          href="https://github.com/elpuas"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="icon">
            <img src={github} alt="Github" />
          </span>
        </a>
      </div>
    </Menu>
  </Segment>
)

export default Navbar
