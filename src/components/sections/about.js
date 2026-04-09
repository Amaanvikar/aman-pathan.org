import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import sr from '../../utils/sr';
import profileImg from '../../images/profile.png';

const StyledAboutSection = styled.section`
  max-width: 900px;

  .inner {
    display: grid;
    grid-template-columns: 3fr 2fr;
    grid-gap: 50px;

    @media (max-width: 768px) {
      display: block;
    }
  }
`;

const StyledText = styled.div`
  ul.skills-list {
    display: grid;
    grid-template-columns: repeat(2, minmax(140px, 200px));
    grid-gap: 0 10px;
    padding: 0;
    margin: 20px 0 0 0;
    overflow: hidden;
    list-style: none;

    li {
      position: relative;
      margin-bottom: 10px;
      padding-left: 20px;
      font-family: var(--font-mono);
      font-size: var(--fz-xs);

      &::before {
        content: '▹';
        position: absolute;
        left: 0;
        color: var(--green);
        font-size: var(--fz-sm);
        line-height: 12px;
      }
    }
  }
`;

const StyledPic = styled.div`
  position: relative;
  max-width: 300px;

  @media (max-width: 768px) {
    margin: 50px auto 0;
    width: 70%;
  }

  .wrapper {
    display: block;
    position: relative;
    width: 100%;
    border-radius: var(--border-radius);
    background-color: var(--green);

    &:hover,
    &:focus {
      outline: 0;
      .img { filter: none; mix-blend-mode: normal; }
      &::after { top: 15px; left: 15px; }
    }

    .img {
      position: relative;
      border-radius: var(--border-radius);
      mix-blend-mode: multiply;
      filter: grayscale(100%) contrast(1);
      transition: var(--transition);
    }

    &::before {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: var(--border-radius);
      background-color: var(--navy);
      top: 0;
      left: 0;
      z-index: 3;
      transition: var(--transition);
      mix-blend-mode: screen;
    }

    &::after {
      content: '';
      display: block;
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: var(--border-radius);
      border: 2px solid var(--green);
      top: 20px;
      left: 20px;
      z-index: -1;
      transition: var(--transition);
    }
  }
`;

const skills = [
  'JavaScript (ES6+)',
  'React.js',
  'Node.js & Express',
  'Flutter & Dart',
  'MongoDB',
  'Firebase',
  'REST APIs',
  'Git & GitHub',
  'Zapier',
  'Google Maps API',
];

const About = () => {
  const revealContainer = useRef(null);

  useEffect(() => {
    if (sr && revealContainer.current) {
      sr.reveal(revealContainer.current, { delay: 200 });
    }
  }, []);

  return (
    <StyledAboutSection id="about" ref={revealContainer}>
      <h2 className="numbered-heading">About Me</h2>

      <div className="inner">
        <StyledText>
          <div>
            <p>
              Hey! I'm Aman — a developer who loves building things that live on the web and in people's
              pockets. My journey started with curiosity about how apps work, and it's evolved into a
              genuine passion for crafting clean, performant, and user-focused digital products.
            </p>
            <p>
              I've had the opportunity to work across the full stack — from building{' '}
              <a href="https://github.com/Amaanvikar" target="_blank" rel="noreferrer">
                real-time cab booking apps
              </a>{' '}
              with live GPS tracking at WindHans Technologies, to shipping automation workflows and SaaS
              billing features at{' '}
              <a href="https://flexprice.io" target="_blank" rel="noreferrer">
                Flexprice
              </a>{' '}
              in Bangalore. I thrive in fast-moving environments where ownership and impact are real.
            </p>
            <p>
              I hold a B.E. in Information Technology from MET Bhujbal Knowledge City, Nashik (GPA: 7.2/10).
              Outside of work, I build side projects with AI integrations, explore new developer tools,
              and enjoy pushing the boundaries of what I can ship.
            </p>
            <p>Here are a few technologies I've been working with recently:</p>
          </div>

          <ul className="skills-list">
            {skills.map(skill => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </StyledText>

        <StyledPic>
          <div className="wrapper">
            <img src={profileImg} alt="Aman Pathan" className="img" />
          </div>
        </StyledPic>
      </div>
    </StyledAboutSection>
  );
};

export default About;
