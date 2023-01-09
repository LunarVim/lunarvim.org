import React, { useEffect, useState } from "react";
import styles from "./styles.modules.css";

const TeamMembersList = [
  {
    name: "Christian Chiarulli",
    username: "ChristianChiarulli",
    donate: [
      { name: "GitHub Sponsors", link: "https://github.com/sponsors/ChristianChiarulli" },
      { name: "Patreon", link: "https://www.patreon.com/chrisatmachine" },
      { name: "Ko-fi", link: "https://ko-fi.com/chrisatmachine" },
      { name: "BuyMeACoffee", link: "https://www.buymeacoffee.com/chrisatmachine" },
      { name: "PayPal", link: "https://www.paypal.com/paypalme/chrisatmachine" },
      { name: "Strike", link: "https://strike.me/chrisatmachine/" },
    ]
  },
  {
    username: "kylo252",
  },
  {
    name: "Abouzar Parvan",
    username: "abzcoding",
  },
  {
    username: "rebuilt",
  },
];

const TeamMembers = () => {
  const [contributors, setContributors] = useState({});

  useEffect(() => {
    fetch("https://api.github.com/repos/LunarVim/LunarVim/stats/contributors")
      .then((res) => res.json())
      .then((data) => {
        const contributors_list = data.map((stats) => (stats.author ? {
          [stats.author.login]: {
            img: stats.author.avatar_url,
            username: stats.author.login,
            contributions: stats.total,
            changes: stats.weeks.reduce((accumulator, week) => {
              return {
                a: accumulator.a + week.a,
                d: accumulator.d + week.d
              }
            }, { a: 0, d: 0 }),
          }
        } : null
        ));
        setContributors(Object.assign({}, ...contributors_list));
      }).catch((err) => console.error(err));
  }, []);

  return (
    <section>
      <div id="team-members" className={`container ${styles.container}`}>
        <div className={styles.members}>
          {TeamMembersList.map((member) => (
            <TeamMember key={member.username} {...member} {...contributors[member.username]} />
          ))}
        </div>
      </div>
    </section>
  );
};


const TeamMember = ({ name, username, img, bio, contributions, changes, donate }) => {
  const nameEl = (name ? <span>{name}</span> : null);
  const usernameEl = (<a href={`https://github.com/${username}`}>@{username}</a>);
  const additionsEl = (changes ? <span className={styles.a}>{changes.a}++</span> : null)
  const deletionsEl = (changes ? <span className={styles.d}>{changes.d}--</span> : null)
  const donationsEl = (donate ? (
    <details open={donate.length < 5 ? "open" : null}>

      <summary>donate</summary>
      <ul>
        {donate.map(({ name, link }) => (
          <li key={name}><a href={link}>{name}</a></li>
        ))}
      </ul>
    </details>
  ) : null);

  return (
    <div className={styles.member}>
      {img ? <img src={img} alt="profile pic" /> : null}
      <h3>{nameEl} {usernameEl}</h3>
      <p className={styles.details}>{contributions} commits {additionsEl} {deletionsEl} </p>
      <p>{bio ? bio : "Write something about yourself."}</p>
      <div style={{ clear: "both" }}> </div>
      {donationsEl}
    </div >
  );
};

export default TeamMembers;
