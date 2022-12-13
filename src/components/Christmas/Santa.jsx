import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import React from "react";
import styles from "./santa.module.css";

const Santa = () => {
  const {
    siteConfig: {
      customFields: {
        christmas: { santa },
      },
    },
  } = useDocusaurusContext();

  if (!santa) return null;

  return (
    <div class={styles.container}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="350"
        height="400"
        class="svg"
      >
        <path fill="transparent" d="M0 0h350v400H0z" />
        <g class={styles.plane}>
          <rect
            x="215.747"
            y="157.738"
            width="25.511"
            height="43.645"
            rx="12.755"
            ry="12.755"
            fill="#666698"
          />
          <path
            fill="#f52a65"
            d="M166.263 185.401h74.995v31.965h-74.995zM166.263 217.366h74.995a31.965 31.965 0 01-31.965 31.965h-43.03v-31.965z"
          />
          <g class={styles.hand}>
            <rect
              x="136.437"
              y="152.836"
              width="26.365"
              height="9.113"
              rx="4.557"
              ry="4.557"
              transform="rotate(-120 149.62 157.393)"
              fill="#f6bfb1"
            />
            <path
              fill="#f52a65"
              d="M144.906 163.746l11.978-6.916 20.407 35.346-11.978 6.916z"
            />
            <rect
              x="139.226"
              y="154.214"
              width="20.172"
              height="6.973"
              rx="3.486"
              ry="3.486"
              transform="rotate(-30 149.312 157.7)"
              fill="#c0caf5"
            />
          </g>
          <path fill="#f6bfb1" d="M171.488 155.28h37.805v23.974h-37.805z" />
          <path
            d="M165.956 185.093v64.545h-12.602v-.024c-.406.015-.818.024-1.23.024a32.272 32.272 0 110-64.545c.412 0 .824.01 1.23.025v-.025z"
            fill="#666698"
          />
          <path fill="#1a1b26" d="M161.345 185.093h4.918v64.545h-4.918z" />
          <path
            d="M113.376 210.296v11.987h-2.34v-.004a6.053 6.053 0 01-.23.004 5.993 5.993 0 110-11.987c.077 0 .154.002.23.005v-.005z"
            fill="#f52a65"
          />
          <g fill="#1a1b26">
            <circle cx="155.505" cy="244.106" r="2.459" />
            <circle cx="155.505" cy="190.933" r="2.459" />
            <circle cx="155.505" cy="208.452" r="2.459" />
            <circle cx="155.505" cy="226.586" r="2.459" />
          </g>
          <rect
            class={styles.blade}
            x="113.244"
            y="167.266"
            width="6.762"
            height="98.354"
            rx="3.381"
            ry="3.381"
            fill="#1a1b26"
          />
          <path
            d="M195.154 211.526h34.732a4.918 4.918 0 014.917 4.918 4.918 4.918 0 01-4.917 4.917h-34.732a4.918 4.918 0 01-4.917-4.917 4.918 4.918 0 014.917-4.918z"
            fill="#666698"
          />
          <g fill="#c0caf5">
            <rect
              x="174.148"
              y="171.282"
              width="15.925"
              height="40.192"
              rx="7.963"
              ry="7.963"
            />
            <rect
              x="188.824"
              y="171.282"
              width="15.925"
              height="40.192"
              rx="7.963"
              ry="7.963"
            />
            <rect
              x="180.862"
              y="167.691"
              width="15.925"
              height="51.21"
              rx="7.963"
              ry="7.963"
              transform="rotate(-90 188.824 193.296)"
            />
            <path d="M161.55 180.896a7.963 7.963 0 016.42-9.252l20.066-3.625a7.963 7.963 0 019.251 6.42 7.963 7.963 0 01-6.42 9.251l-20.066 3.626a7.963 7.963 0 01-9.251-6.42z" />
            <path d="M183.122 174.543a7.963 7.963 0 019.251-6.42l19.491 3.521a7.963 7.963 0 016.42 9.252 7.963 7.963 0 01-9.251 6.42l-19.491-3.522a7.963 7.963 0 01-6.42-9.25z" />
          </g>
          <rect
            x="167.185"
            y="151.899"
            width="6.455"
            height="27.355"
            rx="3.227"
            ry="3.227"
            fill="#666698"
          />
          <rect
            x="207.449"
            y="151.899"
            width="6.455"
            height="27.355"
            rx="3.227"
            ry="3.227"
            fill="#666698"
          />
          <circle cx="190.083" cy="165.883" r="3.842" fill="#e76160" />
          <circle cx="190.083" cy="179.868" r="6.454" />
          <path
            fill="#f52a65"
            d="M167.185 148.21h46.718v7.069h-46.718zM213.903 145.137h-46.718a10.757 10.757 0 0110.757-10.758h25.204a10.757 10.757 0 0110.757 10.758z"
          />
          <path fill="#666698" d="M167.185 143.907h46.718v4.303h-46.718z" />
          <circle cx="181.016" cy="146.059" r="7.377" fill="#666698" />
          <circle cx="181.016" cy="146.059" r="5.62" fill="#1a1b26" />
          <circle cx="200.072" cy="146.059" r="7.377" fill="#666698" />
          <circle cx="200.072" cy="146.059" r="5.62" fill="#1a1b26" />
          <path
            d="M176.713 165.422s2.459-3.995 6.454 0M197.306 165.422s2.459-3.995 6.454 0"
            fill="none"
            stroke="#000"
            strokeMiterlimit="10"
            strokeWidth="1.844"
          />
        </g>
      </svg>
    </div>
  );
};

export default Santa;
