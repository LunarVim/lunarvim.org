import React, { useEffect, useState } from 'react';
import CountUp from 'react-countup';
import classNames from 'classnames';
import styles from './styles.modules.css';

const GITHUB_API_URL =
  'https://api.github.com/repos/LunarVim/LunarVim/stats/contributors';
const TRANSITION_DELAY_IN_MILLISECONDS = 400;

const teamMembersList = [
  {
    id: 1,
    name: 'Christian Chiarulli',
    username: 'ChristianChiarulli',
    donate: [
      {
        name: 'GitHub Sponsors',
        link: 'https://github.com/sponsors/ChristianChiarulli',
      },
      { name: 'Patreon', link: 'https://www.patreon.com/chrisatmachine' },
      { name: 'Ko-fi', link: 'https://ko-fi.com/chrisatmachine' },
      {
        name: 'BuyMeACoffee',
        link: 'https://www.buymeacoffee.com/chrisatmachine',
      },
      {
        name: 'PayPal',
        link: 'https://www.paypal.com/paypalme/chrisatmachine',
      },
      { name: 'Strike', link: 'https://strike.me/chrisatmachine/' },
    ],
  },
  {
    id: 2,
    username: 'kylo252',
  },
  {
    id: 3,
    name: 'Abouzar Parvan',
    username: 'abzcoding',
  },
  {
    id: 4,
    username: 'rebuilt',
  },
];
const { container, members } = styles;

export default function TeamMembers() {
  const [isFetchingContributors, setIsFetchingContributors] = useState(true);
  const [contributors, setContributors] = useState({});

  useEffect(() => {
    async function getContributors() {
      try {
        const res = await fetch(GITHUB_API_URL);
        const data = await res.json();

        if (data.length) {
          const contributorsList = data.filter(({ author }) =>
            teamMembersList.some(({ username }) => username === author?.login),
          );
          const newContributors = contributorsList.reduce(
            (result, { author, total: contributions, weeks }) => {
              const { login: username, avatar_url: img } = author;
              const changes = weeks.reduce(
                (prev, { a, d }) => ({
                  a: prev.a + a,
                  d: prev.d + d,
                }),
                {
                  a: 0,
                  d: 0,
                },
              );

              return {
                ...result,
                [username]: {
                  img,
                  username,
                  contributions,
                  changes,
                },
              };
            },
            {},
          );

          setContributors(newContributors);
          setIsFetchingContributors(false);
        }
      } catch (err) {
        console.error(err);
      }
    }

    getContributors();
  }, []);

  return (
    <section>
      <div id="team-members" className={classNames('container', container)}>
        <div className={members}>
          {teamMembersList.map(({ id, name, username, donate }) => {
            const contributorData = contributors[username] ?? {};

            return (
              <TeamMember
                key={id}
                id={id}
                name={name}
                username={username}
                donate={donate}
                contributorData={contributorData}
                isLoading={isFetchingContributors}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

const durationInSeconds = TRANSITION_DELAY_IN_MILLISECONDS / 1_000;

const DetailCountUp = ({ value, suffix, className }) => (
  <CountUp
    start={0}
    end={value}
    duration={durationInSeconds}
    suffix={suffix}
    formattingFn={(value) => `${value.toLocaleString()}${suffix}`}
    className={className}
  />
);

const {
  member,
  'image-container': imageContainer,
  image,
  'image--show': imageShow,
  title,
  clear,
  details,
  detail,
  a,
  d,
  summary,
  list,
} = styles;

function TeamMember({
  id,
  name,
  username,
  donate,
  contributorData,
  isLoading,
}) {
  const [shouldRenderImage, setShouldRenderImage] = useState(false);
  const { img, bio, contributions, changes } = contributorData;
  const commits = shouldRenderImage ? contributions : 0;
  const additions = shouldRenderImage ? changes.a : 0;
  const deletions = shouldRenderImage ? changes.d : 0;
  const description = bio || 'Write something about yourself.';

  useEffect(() => {
    if (isLoading) {
      return;
    }

    const delay = (id - 1) * TRANSITION_DELAY_IN_MILLISECONDS;
    const timeout = setTimeout(() => setShouldRenderImage(true), delay);

    return () => clearTimeout(timeout);
  }, [isLoading, id]);

  return (
    <div className={member}>
      <div className={imageContainer}>
        <img
          src={img}
          className={classNames(image, {
            [imageShow]: shouldRenderImage,
          })}
        />
      </div>
      <h3 className={title}>
        {name && (
          <>
            <span>{name}</span>&nbsp;{' '}
          </>
        )}
        <a href={`https://github.com/${username}`}>@{username}</a>
      </h3>
      <p className={details}>
        <DetailCountUp value={commits} suffix={' commits'} />
        <DetailCountUp
          value={additions}
          suffix={'++'}
          className={classNames(detail, a)}
        />
        <DetailCountUp
          value={deletions}
          suffix={'--'}
          className={classNames(detail, d)}
        />
      </p>
      <p>{description}</p>
      <div className={clear} />
      {donate && (
        <details open={donate.length < 5}>
          <summary className={summary}>donate</summary>
          <ul className={list}>
            {donate.map(({ name, link }) => (
              <li key={link}>
                <a href={link}>{name}</a>
              </li>
            ))}
          </ul>
        </details>
      )}
    </div>
  );
}
