import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout'


const AboutPage = () => {
  return (
    <Layout>
      <h1>About</h1>
      <p>About my life</p>
      <h3><Link to='/contact'>Wanna contact me ?</Link></h3>
    </Layout>
  );
};

export default AboutPage;