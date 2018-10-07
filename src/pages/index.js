import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const IndexPage = () => (
  <Layout>
    <h1>Hey you</h1>
    <p>My name is Amit Zilberstein and I'm learning web development with FCC!</p>
    <p>Until recently I have managed the Hebrew University Entrepreneruship Center, look at <a href='http://www.hustart.com'>www.HUstart.com</a> to see what I have built there</p>
    <p>Or you can read <a href="https://medium.com/@zilbersteinAmit/how-we-established-a-university-entrepreneurship-center-with-a-100-000-annual-budget-56665229add3">my post in Medium</a></p>
    <p>Welcome to my first Gatsby site.</p>
    <p>Now I'm going to build something great.</p>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
