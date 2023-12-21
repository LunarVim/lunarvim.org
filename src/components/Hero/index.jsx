import React, { useContext } from 'react';
import { AnimationsContext } from '../../hooks/useAnimations';
import Translate from '@docusaurus/Translate';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import styles from './index.module.css';
import Stars from '../Stars';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import ShootingStar from '../Icons/ShootingStar';
import DisabledStar from '../Icons/DisabledStar';
import Slogan from './Slogan';
import Santa from '../Christmas/Santa';

const Hero = () => {
  const {
    siteConfig: {
      customFields: {
        primaryCTA,
        secondaryCTA,
        tertiaryCTA,
        heroImage,
        christmas: { snowBtn },
      },
    },
  } = useDocusaurusContext();
  const { animate, setAnimate } = useContext(AnimationsContext);

  return (
    <Stars FALLING_STARS_COUNT={3}>
      <button
        className={styles.toggleAnimations}
        onClick={() => setAnimate((currentState) => !currentState)}
      >
        {animate ? <DisabledStar /> : <ShootingStar />}
      </button>

      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className={`container ${styles.container}`}>
          <div className={styles.heroContent}>
            <h1 className={`hero__title ${styles.heroTitle}`}>LunarVim</h1>
            <Slogan />
            <p className={`hero__description ${styles.heroDescription} `}>
              An IDE layer for{' '}
              <a href='https://neovim.io' target={'_blank'}>
                Neovim
              </a>{' '}
              with sane defaults. Completely free and community driven.
            </p>
            <div className={styles.buttons}>
              <Link
                className={`button button--primary button--lg ${
                  snowBtn ? styles.snowBtn : ''
                }`}
                to={primaryCTA.to}
              >
                <Translate>{primaryCTA.text}</Translate>
              </Link>
              {secondaryCTA ? (
                <Link
                  className={`button button--outline button--lg ${
                    snowBtn ? styles.snowBtn : ''
                  }`}
                  to={secondaryCTA.to}
                >
                  <Translate>{secondaryCTA.text}</Translate>
                </Link>
              ) : null}
              {tertiaryCTA ? (
                <Link
                  className="button button--link button--lg"
                  to={tertiaryCTA.to}
                >
                  <Translate>{tertiaryCTA.text}</Translate>
                </Link>
              ) : null}
            </div>
          </div>
          <div className={styles.heroImage}>
            <img
              src={require('@site/static/img/lunarvim_logo.png').default}
              alt={heroImage.alt}
            />
          </div>
          <Santa />
        </div>
      </header>
    </Stars>
  );
};

export default Hero;
