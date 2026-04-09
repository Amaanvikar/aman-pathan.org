import React, { useState, useEffect, useRef } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import sr from '../../utils/sr';

const StyledJobsSection = styled.section`
  max-width: 700px;

  .inner {
    display: flex;

    @media (max-width: 600px) {
      display: block;
    }
  }
`;

const StyledTabList = styled.div`
  position: relative;
  z-index: 3;
  width: max-content;
  padding: 0;
  margin: 0;
  list-style: none;

  @media (max-width: 600px) {
    display: flex;
    overflow-x: auto;
    width: calc(100% + 100px);
    padding-left: 50px;
    margin-left: -50px;
    margin-bottom: 30px;
  }
  @media (max-width: 480px) {
    width: calc(100% + 50px);
    padding-left: 25px;
    margin-left: -25px;
  }

  li {
    &:first-of-type { border-top-left-radius: var(--border-radius); border-top-right-radius: var(--border-radius); }
    &:last-of-type { border-bottom-left-radius: var(--border-radius); border-bottom-right-radius: var(--border-radius); }
  }
`;

const StyledTabButton = styled.button`
  display: flex;
  align-items: center;
  width: 100%;
  height: var(--tab-height);
  padding: 0 20px 2px;
  border-left: 2px solid var(--lightest-navy);
  background-color: transparent;
  color: ${({ isActive }) => (isActive ? 'var(--green)' : 'var(--slate)')};
  font-family: var(--font-mono);
  font-size: var(--fz-xs);
  text-align: left;
  white-space: nowrap;
  transition: var(--transition);
  min-width: var(--tab-width);

  &:hover,
  &:focus {
    color: var(--green);
    background-color: var(--light-navy);
  }

  @media (max-width: 600px) {
    border-left: 0;
    border-bottom: 2px solid ${({ isActive }) => (isActive ? 'var(--green)' : 'var(--lightest-navy)')};
    min-width: 120px;
    padding: 0 15px;
    text-align: center;
    justify-content: center;
  }
`;

const StyledHighlight = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
  width: 2px;
  height: var(--tab-height);
  border-radius: var(--border-radius);
  background: var(--green);
  transform: translateY(calc(${({ activeTabId }) => activeTabId} * var(--tab-height)));
  transition: transform 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
  transition-delay: 0.1s;

  @media (max-width: 600px) {
    top: auto;
    bottom: 0;
    width: 100%;
    max-width: var(--tab-width);
    height: 2px;
    transform: translateX(calc(${({ activeTabId }) => activeTabId} * var(--tab-width)));
  }
`;

const StyledTabPanels = styled.div`
  position: relative;
  width: 100%;
  margin-left: 20px;

  @media (max-width: 600px) {
    margin-left: 0;
  }
`;

const StyledTabPanel = styled.div`
  width: 100%;
  height: auto;
  padding: 10px 5px;

  ul {
    padding: 0;
    margin: 0;
    list-style: none;
    font-size: var(--fz-lg);

    li {
      position: relative;
      padding-left: 30px;
      margin-bottom: 10px;

      &::before {
        content: '▹';
        position: absolute;
        left: 0;
        color: var(--green);
      }
    }
  }

  h3 {
    margin-bottom: 2px;
    font-size: var(--fz-xxl);
    font-weight: 500;
    line-height: 1.3;

    .company {
      color: var(--green);
    }
  }

  .range {
    margin-bottom: 25px;
    color: var(--light-slate);
    font-family: var(--font-mono);
    font-size: var(--fz-xs);
  }
`;

const Jobs = () => {
  const data = useStaticQuery(graphql`
    query {
      jobs: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/content/jobs/" } }
        sort: { frontmatter: { date: DESC } }
      ) {
        edges {
          node {
            frontmatter {
              title
              company
              location
              range
              url
            }
            html
          }
        }
      }
    }
  `);

  const jobsData = data.jobs.edges;
  const [activeTabId, setActiveTabId] = useState(0);
  const revealContainer = useRef(null);

  useEffect(() => {
    if (sr && revealContainer.current) {
      sr.reveal(revealContainer.current, { delay: 200 });
    }
  }, []);

  return (
    <StyledJobsSection id="experience" ref={revealContainer}>
      <h2 className="numbered-heading">Where I've Worked</h2>

      <div className="inner">
        <StyledTabList role="tablist" aria-label="Job tabs">
          {jobsData.map(({ node }, i) => {
            const { company } = node.frontmatter;
            return (
              <li key={i}>
                <StyledTabButton
                  isActive={activeTabId === i}
                  onClick={() => setActiveTabId(i)}
                  role="tab"
                  aria-selected={activeTabId === i}
                  aria-controls={`panel-${i}`}
                  id={`tab-${i}`}>
                  <span>{company}</span>
                </StyledTabButton>
              </li>
            );
          })}
          <StyledHighlight activeTabId={activeTabId} />
        </StyledTabList>

        <StyledTabPanels>
          {jobsData.map(({ node }, i) => {
            const { title, url, company, range } = node.frontmatter;
            return (
              <StyledTabPanel
                key={i}
                id={`panel-${i}`}
                role="tabpanel"
                aria-labelledby={`tab-${i}`}
                hidden={activeTabId !== i}>
                <h3>
                  <span>{title}</span>
                  <span className="company">
                    &nbsp;@&nbsp;
                    <a href={url} className="inline-link" target="_blank" rel="noreferrer">
                      {company}
                    </a>
                  </span>
                </h3>
                <p className="range">{range}</p>
                <div dangerouslySetInnerHTML={{ __html: node.html }} />
              </StyledTabPanel>
            );
          })}
        </StyledTabPanels>
      </div>
    </StyledJobsSection>
  );
};

export default Jobs;
