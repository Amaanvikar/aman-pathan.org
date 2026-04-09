import React from 'react';
import styled from 'styled-components';
import { Layout, Head } from '../components';

const StyledMainContainer = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-height: 100vh;
  padding: 0;
  text-align: center;

  h1 {
    font-size: clamp(100px, 25vw, 200px);
    line-height: 1;
    color: var(--lightest-slate);
    font-family: var(--font-mono);
  }

  h2 {
    font-size: clamp(30px, 5vw, 50px);
    font-weight: 400;
    color: var(--slate);
    margin: 0 0 30px;
  }

  a {
    color: var(--green);
    border: 1px solid var(--green);
    padding: 1.25rem 1.75rem;
    font-size: var(--fz-sm);
    font-family: var(--font-mono);
    border-radius: var(--border-radius);
    margin-top: 40px;
    &:hover { background-color: var(--green-tint); }
  }
`;

const NotFoundPage = ({ location }) => (
  <Layout location={location}>
    <Head title="404: Not Found" />
    <StyledMainContainer className="fillHeight">
      <h1>404</h1>
      <h2>Page Not Found</h2>
      <p>The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.</p>
      <a href="/">Go Home</a>
    </StyledMainContainer>
  </Layout>
);

export default NotFoundPage;
