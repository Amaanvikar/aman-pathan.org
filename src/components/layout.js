import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Nav from './nav';
import Social from './social';
import Email from './email';
import Footer from './footer';

const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Layout = ({ children, location }) => {
  const isHome = location && location.pathname === '/';

  return (
    <>
      <StyledContent>
        <Nav isHome={isHome} />
        <Social isHome={isHome} />
        <Email isHome={isHome} />
        <div id="content" className="fillHeight">
          {children}
          <Footer />
        </div>
      </StyledContent>
    </>
  );
};

export default Layout;
