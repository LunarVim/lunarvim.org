import styles from './lightrope.module.css';
import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

const Lightrope = () => {
  const lightsCount = 27;

  const {
    siteConfig: {
      customFields: {
        christmas: { lightrope },
      },
    },
  } = useDocusaurusContext();

  if (!lightrope) return null;

  return (
    <ul className={styles.lightrope}>
      {Array.from({ length: lightsCount }).map((_, idx) => (
        <li key={idx} />
      ))}
    </ul>
  );
};

export default Lightrope;
