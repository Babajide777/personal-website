import React from 'react';
import styled from 'styled-components';
import PText from './PText';
import SectionTitle from './SectionTitle';
import Button from './Button';
import AboutImg from '../assets/images/about-sec-img.png';

const AboutSectionStyled = styled.div`
  padding: 10rem 0;
  .container {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    text-align: left;
  }
  .aboutSection__left,
  .aboutSection__right {
    left: 1;
  }
  .section-title {
    text-align: left;
  }
  .para {
    margin-top: 2rem;
    margin-left: 0;
  }
  .aboutSection__buttons {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 2rem;
    margin-top: 2rem;
  }

  @media only screen and (max-width: 950px) {
    .aboutSection__left {
      flex: 4;
    }
    .aboutSection__right {
      flex: 3;
    }
  }

  @media only screen and (max-width: 768px) {
    .container {
      flex-direction: column;
      text-align: center;
    }
    .aboutSection__left,
    .aboutSection__right {
      width: 100%;
    }
    .aboutSection__right {
      margin-top: 3rem;
    }
    .section-title {
      text-align: center;
    }
    .para {
      margin: 0 auto;
      margin-top: 2rem;
    }
    .aboutSection__buttons {
      flex-direction: column;
      gap: 0rem;
      .button-wrapper,
      a {
        width: 100%;
        text-align: center;
      }
    }
  }
`;

const AboutSection = () => (
  <AboutSectionStyled>
    <div className="container">
      <div className="aboutSection__left">
        <SectionTitle subheading="Let me introduce myself" heading="About me" />
        <PText>
          I am web developer and technical writer who uses MERN stack and other
          modern web technologies to create top-notch websites, webApps, and
          other web solutions. I am particularly interested in stratups and
          small scale businesses as I have alot of experience working in this
          niche.
        </PText>
        <div className="aboutSection__buttons">
          <Button btnLink="/projects" btnText="Works" />
          <Button btnLink="/about" btnText="Read More" outline />
        </div>
      </div>

      <div className="aboutSection__right">
        <img src={AboutImg} alt="about section" />
      </div>
    </div>
  </AboutSectionStyled>
);

export default AboutSection;
