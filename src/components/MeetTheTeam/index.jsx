import React, { useEffect, useState } from "react";
import styles from "./styles.modules.css";
import Link from "@docusaurus/Link";
import Stars from "@site/src/components/Stars";

const TeamMembersList = [
  {
    name: "Christian Chiarulli",
    username: "ChristianChiarulli",
    img: "https://avatars.githubusercontent.com/u/29136904?v=4",
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
    img: "https://avatars.githubusercontent.com/u/59826753?v=4",
  },
  {
    name: "Abouzar Parvan",
    username: "abzcoding",
    img: "https://avatars.githubusercontent.com/u/10992695?v=4",
  },
  {
    username: "rebuilt",
    img: "https://avatars.githubusercontent.com/u/16025007?v=4",
  },
];

const TeamMembers = () => {
  return (
    <section>
      <div id="team-members" className={`container ${styles.container}`}>
        <div className={styles.members}>
          {TeamMembersList.map((member) => (
            <TeamMember key={member.username} {...member} />
          ))}
        </div>
      </div>
    </section>
  );
};


const TeamMember = ({ name, username, img, bio, donate }) => {
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

      <p>{bio ? bio : "Write something about yourself."}</p>

      <div style={{ clear: "both" }}> </div>
      {donationsEl}

    </div >
  );
};

export default TeamMembers;
