import styles from "./lightrope.module.css";
import React from "react";

const Lightrope = () => {
  const lightsCount = 27;

  return (
    <ul className={styles.lightrope}>
      {Array.from({ length: lightsCount }).map((_, idx) => (
        <li key={idx} />
      ))}
    </ul>
  );
};

export default Lightrope;
