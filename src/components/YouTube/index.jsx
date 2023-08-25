import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Clouds from '../Clouds';
import styles from './styles.module.css';
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';
import './yt-lite.css'

const YouTube = () => {
  const {
    siteConfig: {
      customFields: { YouTube },
    },
  } = useDocusaurusContext();

  return (
    <Clouds>
      <section className={`container ${styles.container}`}>
        {YouTube.map((yt) => (
          <div key={yt.id} className={styles.yt}>
            <h2>{yt.title}</h2>
            <LiteYouTubeEmbed
              width="560"
              height="315"
              id={yt.id}
              title={yt.title}
              playlistCoverId={yt.playlistCoverId}
              playlist={yt.playlistCoverId}
              playerClass="lty-playbtn"
            />
          </div>
        ))}
      </section>
    </Clouds>
  );
};

export default YouTube;
