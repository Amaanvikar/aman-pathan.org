import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  z-index: 11;
  padding: 0px 50px;
  width: 100%;
  height: var(--nav-height);
  background-color: rgba(10, 25, 47, 0.85);
  backdrop-filter: blur(10px);
  transition: var(--transition);

  ${({ scrollDirection, scrolledToTop }) =>
    !scrolledToTop &&
    scrollDirection === 'up' &&
    css`
      height: var(--nav-scroll-height);
      box-shadow: 0 10px 30px -10px var(--navy-shadow);
    `}

  ${({ scrollDirection }) =>
    scrollDirection === 'down' &&
    css`
      height: var(--nav-scroll-height);
      transform: translateY(calc(var(--nav-scroll-height) * -1));
      box-shadow: 0 10px 30px -10px var(--navy-shadow);
    `}

  @media (max-width: 1080px) { padding: 0 40px; }
  @media (max-width: 768px) { padding: 0 25px; }
`;

const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  color: var(--lightest-slate);
  font-family: var(--font-mono);
  font-size: var(--fz-xs);
  counter-reset: item 0;
`;

const StyledLogo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  a {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 42px;
    height: 42px;
    border: 1px solid var(--green);
    border-radius: var(--border-radius);
    color: var(--green);
    font-family: var(--font-mono);
    font-size: var(--fz-xl);
    font-weight: 700;
    line-height: 1;
    &:hover { background-color: var(--green-tint); }
  }
`;

const StyledLinks = styled.div`
  display: flex;
  align-items: center;
  ol {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0;
    margin: 0;
    list-style: none;
    li {
      margin: 0 5px;
      position: relative;
      counter-increment: item 1;
      font-size: var(--fz-xs);
      a {
        padding: 10px;
        &::before {
          content: '0' counter(item) '.';
          margin-right: 5px;
          color: var(--green);
          font-size: var(--fz-xxs);
          text-align: right;
        }
      }
    }
  }
  @media (max-width: 768px) { display: none; }
`;

const StyledResumeButton = styled.a`
  color: var(--green);
  background-color: transparent;
  border: 1px solid var(--green);
  border-radius: var(--border-radius);
  padding: 0.75rem 1rem;
  font-family: var(--font-mono);
  font-size: var(--fz-xs);
  line-height: 1;
  text-decoration: none;
  transition: var(--transition);
  margin-left: 15px;
  &:hover { background-color: var(--green-tint); }
  @media (max-width: 768px) { display: none; }
`;

const DELTA = 5;
const navLinks = [
  { name: 'About', url: '#about' },
  { name: 'Experience', url: '#experience' },
  { name: 'Work', url: '#projects' },
  { name: 'Contact', url: '#contact' },
];

const Nav = ({ isHome }) => {
  const [scrollDirection, setScrollDirection] = useState('none');
  const [scrolledToTop, setScrolledToTop] = useState(true);
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      setScrolledToTop(scrollTop < 50);
      if (Math.abs(scrollTop - lastScrollTop) <= DELTA) return;
      setScrollDirection(scrollTop > lastScrollTop ? 'down' : 'up');
      setLastScrollTop(scrollTop);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollTop]);

  return (
    <StyledHeader scrollDirection={scrollDirection} scrolledToTop={scrolledToTop}>
      <StyledNav>
        <StyledLogo>
          <a href="/">AP</a>
        </StyledLogo>
        <StyledLinks>
          <ol>
            {navLinks.map(({ name, url }) => (
              <li key={name}>
                <a href={url}>{name}</a>
              </li>
            ))}
          </ol>
          <StyledResumeButton href="mailto:amaanvikar8313@gmail.com">
            Get In Touch
          </StyledResumeButton>
        </StyledLinks>
      </StyledNav>
    </StyledHeader>
  );
};

export default Nav;
