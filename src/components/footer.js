import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: auto;
  min-height: 70px;
  padding: 15px;
  text-align: center;
`;

const StyledCredit = styled.div`
  color: var(--light-slate);
  font-family: var(--font-mono);
  font-size: var(--fz-xxs);
  line-height: 1;
  a {
    padding: 10px;
    &:hover { color: var(--green); }
  }
  .github-stats {
    margin-top: 10px;
    & > span {
      display: inline-flex;
      align-items: center;
      margin: 0 7px;
    }
    svg { display: inline-block; margin-right: 5px; width: 14px; height: 14px; }
  }
`;

const Footer = () => (
  <StyledFooter>
    <StyledCredit>
      <div>
        Designed &amp; Built by{' '}
        <a href="https://github.com/Amaanvikar" target="_blank" rel="noreferrer">
          Aman Pathan
        </a>
      </div>
      <div style={{ marginTop: 8 }}>
        <a href="https://github.com/Amaanvikar" target="_blank" rel="noreferrer">GitHub</a>
        {' · '}
        <a href="https://linkedin.com/in/amaan-vikar-2a2a50219/" target="_blank" rel="noreferrer">LinkedIn</a>
        {' · '}
        <a href="mailto:amaanvikar8313@gmail.com">amaanvikar8313@gmail.com</a>
      </div>
    </StyledCredit>
  </StyledFooter>
);

export default Footer;
