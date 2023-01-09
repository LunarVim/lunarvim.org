import React, { useEffect, useState } from "react";
import styles from "./styles.modules.css";

const TeamMembersList = [
  {
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
    username: "abzcoding",
  },
  {
    username: "rebuilt",
  },
];

const TeamMembers = () => {
  const [contributors, setContributors] = useState({});

  useEffect(() => {
    fetch("https://api.github.com/repos/LunarVim/LunarVim/contributors")
      .then((res) => res.json())
      .then((data) => {
        const contributors_list = data.map((contributor) => ({
            [contributor.login]: {
            name: contributor.login,
            img: contributor.avatar_url,
            username: contributor.login,
            contributions: contributor.contributions,
          }}
        ));
        setContributors(Object.assign({}, ...contributors_list));
      }).catch((err) => console.error(err));
  }, []);

  return (
    <section>
      <div id="team-members" className={`container ${styles.container}`}>
        <div className={styles.members}>
          {TeamMembersList.map((member) => (
            <TeamMember key={member.username} donate={member.donate} {...contributors[member.username]} />
          ))}
        </div>
      </div>
    </section>
  );
};


const TeamMember = ({ name, username, img, bio, contributions,donate }) => {
  console.log(username)
  const nameEl = (name ? <span>{name}</span> : null);
  const usernameEl = (<a href={`https://github.com/${username}`}>@{username}</a>);
  const donationsEl = (donate ? (
    <details open={donate.length < 5 ? "open" : null}>

      <summary>donate</summary>
      <ul>
        {donate.map(({ name, link }) => (
          <li><a href={link}>{name}</a></li>
        ))}
      </ul>
    </details>
  ) : null);

  return (
    <div className={styles.member}>
      {img ? <img src={img} alt="profile pic" /> : null}
      <h3>{nameEl} {usernameEl}</h3>
      <p>{contributions} contributions</p>
      <p>{bio ? bio : "Write something about yourself."}</p>
      <div style={{ clear: "both" }}> </div>
      {donationsEl}
    </div >
  );
};

export default TeamMembers;
