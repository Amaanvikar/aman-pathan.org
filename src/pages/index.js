import React from 'react';
import styled from 'styled-components';
import { Layout, Head } from '../components';
import Hero from '../components/sections/hero';
import About from '../components/sections/about';
import Jobs from '../components/sections/jobs';
import FeaturedProjects from '../components/sections/featured';
import Contact from '../components/sections/contact';

const StyledMainContainer = styled.main`
  counter-reset: section;
`;

const IndexPage = ({ location }) => (
  <Layout location={location}>
    <Head />
    <StyledMainContainer className="fillHeight">
      <Hero />
      <About />
      <Jobs />
      <FeaturedProjects />
      <Contact />
    </StyledMainContainer>
  </Layout>
);

export default IndexPage;
