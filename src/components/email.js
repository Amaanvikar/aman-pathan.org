import React from 'react';
import styled from 'styled-components';

const StyledSideElement = styled.div`
  width: 40px;
  position: fixed;
  bottom: 0;
  left: auto;
  right: 40px;
  z-index: 10;
  color: var(--light-slate);
  @media (max-width: 1080px) { display: none; }
`;

const StyledEmailLink = styled.a`
  font-family: var(--font-mono);
  font-size: var(--fz-xxs);
  letter-spacing: 0.1em;
  writing-mode: vertical-rl;
  margin: 20px auto;
  padding: 10px;
  &::after {
    content: '';
    display: block;
    width: 1px;
    height: 90px;
    margin: 0 auto;
    background-color: var(--light-slate);
  }
  &:hover { transform: translateY(-3px); color: var(--green); }
`;

const Email = () => (
  <StyledSideElement>
    <StyledEmailLink href="mailto:amaanvikar8313@gmail.com">
      amaanvikar8313@gmail.com
    </StyledEmailLink>
  </StyledSideElement>
);

export default Email;
