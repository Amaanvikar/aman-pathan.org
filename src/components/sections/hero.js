import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const StyledHeroSection = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: flex-start;
  min-height: 100vh;
  height: 100vh;
  padding: 0;

  @media (max-width: 480px) and (min-height: 700px) {
    padding-bottom: 10vh;
  }

  h1 {
    margin: 0 0 30px 4px;
    color: var(--green);
    font-family: var(--font-mono);
    font-size: clamp(var(--fz-sm), 5vw, var(--fz-md));
    font-weight: 400;
  }

  h3 {
    margin-top: 5px;
    color: var(--slate);
    line-height: 0.9;
  }

  p {
    margin: 20px 0 0;
    max-width: 540px;
  }

  .email-link {
    color: var(--green);
    background-color: transparent;
    border: 1px solid var(--green);
    border-radius: var(--border-radius);
    padding: 1.25rem 1.75rem;
    font-size: var(--fz-sm);
    font-family: var(--font-mono);
    line-height: 1;
    text-decoration: none;
    transition: var(--transition);
    margin-top: 50px;
    &:hover { background-color: var(--green-tint); }
  }
`;

const Hero = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), 100);
    return () => clearTimeout(timeout);
  }, []);

  const items = [
    <h1>Hi, my name is</h1>,
    <h2 className="big-heading">Aman Pathan.</h2>,
    <h3 className="big-heading">I build for web &amp; mobile.</h3>,
    <p>
      I'm a <strong style={{ color: 'var(--lightest-slate)' }}>Full-Stack &amp; Mobile Developer</strong> based
      in Bangalore, India, specialising in building exceptional digital experiences — from scalable MERN web
      applications to cross-platform Flutter mobile apps. Currently open to exciting new opportunities.
    </p>,
    <a className="email-link" href="#contact">
      Get In Touch
    </a>,
  ];

  return (
    <StyledHeroSection>
      {isMounted &&
        items.map((item, i) => (
          <div
            key={i}
            style={{
              opacity: 0,
              animation: `fade-up 0.5s ease forwards`,
              animationDelay: `${i * 100 + 100}ms`,
            }}>
            {item}
          </div>
        ))}
    </StyledHeroSection>
  );
};

export default Hero;
