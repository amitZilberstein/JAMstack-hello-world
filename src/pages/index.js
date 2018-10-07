import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const IndexPage = () => (
  <Layout>
    <h1>Hey you</h1>
    <p>My name is Amit Zilberstein and I'm learning web development with FCC!</p>
    <p>Until recently I have managed the Hebrew University Entrepreneruship Center, look at<a href='www.hustart.com'>www.HUstart.com</a></p>
    <p>Welcome to my first Gatsby site.</p>
    <p>Now I'm going to build something great.</p>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
