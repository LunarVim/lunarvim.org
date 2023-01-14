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
            teamMembersList.some(({ username }) => username === author.login),
          );
          const newContributors = contributorsList.reduce(
            (accumulator, { author, total: contributions, weeks }) => {
              const { login: username, avatar_url: img } = author;
              const changes = weeks.reduce(
                (accumulator, week) => ({
                  a: accumulator.a + week.a,
                  d: accumulator.d + week.d,
                }),
                {
                  a: 0,
                  d: 0,
                },
              );

              return {
                ...accumulator,
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

  const { container, members } = styles;

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

function DetailCountUp({ value, suffix, className }) {
  const durationInSeconds = TRANSITION_DELAY_IN_MILLISECONDS / 1_000;

  return (
    <CountUp
      start={0}
      end={value}
      duration={durationInSeconds}
      suffix={suffix}
      formattingFn={(value) => `${value.toLocaleString()}${suffix}`}
      className={className}
    />
  );
}

function TeamMember({
  id,
  name,
  username,
  donate,
  contributorData,
  isLoading,
}) {
  const [shouldRender, setShouldRender] = useState(false);
  const { img, bio, contributions, changes } = contributorData;
  const commits = shouldRender ? contributions : 0;
  const additions = shouldRender ? changes.a : 0;
  const deletions = shouldRender ? changes.d : 0;
  const description = bio || 'Write something about yourself.';

  useEffect(() => {
    if (isLoading) {
      return;
    }

    const delay = (id - 1) * TRANSITION_DELAY_IN_MILLISECONDS;
    const timeout = setTimeout(() => setShouldRender(true), delay);

    return () => clearTimeout(timeout);
  }, [isLoading, id]);

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

  return (
    <div className={member}>
      <div className={imageContainer}>
        <img
          src={img}
          className={classNames(image, {
            [imageShow]: shouldRender,
          })}
        />
      </div>
      <h3 className={title}>
        <span>{name}</span>
        &nbsp;
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
              <li key={name}>
                <a href={link}>{name}</a>
              </li>
            ))}
          </ul>
        </details>
      )}
    </div>
  );
}
