import styles from "./Hero.module.css";

import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I am Vivek</h1>
        <p className={styles.description}>
          I am a frontend Developer with 1 year plus experience in React and
          NodeJs. Let&apos;s build impactful solutions together!
        </p>
        <a
          href="https://drive.google.com/file/d/1AYntTRgCWv-x6uW9WRSr5JTB1eyGzIDM/view?usp=sharing"
          className={styles.contactBtn}
          rel="noreferrer"
          target="_blank"
        >
          My Resume
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero Image"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
