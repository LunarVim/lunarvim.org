import styles from "./styles.module.css";
import Snowfall from "react-snowfall";
import React, { useContext } from "react";
import { AnimationsContext } from "../../hooks/useAnimations";

const ChristmasAinmations = () => {
  const lightsCount = 27;
  const { animate } = useContext(AnimationsContext);

  if (!animate) return null;

  return (
    <>
      <ul className={styles.lightrope}>
        {Array.from({ length: lightsCount }).map((_, idx) => (
          <li key={idx} />
        ))}
      </ul>

      <div
        style={{
          inset: 0,
          position: "fixed",
          zIndex: 100,
          pointerEvents: "none",
        }}
      >
        <Snowfall snowflakeCount={70} speed={[0.5, 2.5]} wind={[-0.5, 3.0]} />
      </div>
    </>
  );
};

export default ChristmasAinmations;
