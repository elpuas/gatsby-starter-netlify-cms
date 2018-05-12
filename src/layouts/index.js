import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { Container } from 'semantic-ui-react'

import Navbar from '../components/Navbar'
import 'semantic-ui-css/semantic.min.css';
import './losBroders.scss'

const TemplateWrapper = ({ children }) => (
  <Container>
    <meta charSet="utf-8" />
    <Helmet title="Los Broders | You Named it, We Code it!" />
    <meta name="description" content="We are a digital-first agency that specialize in building awesome digital products"/>
    <Navbar />
    <div>{children()}</div>
  </Container>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
