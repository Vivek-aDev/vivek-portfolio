import styles from "./Hero.module.css";

import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I am Vivek</h1>
        <p className={styles.description}>
          I am a frontend Developer with 1 year plus experience in React and
          NodeJs. React out if you want to hire!
        </p>
        <a
          href="mailto: vivekananda.work2022@gmail.com"
          className={styles.contactBtn}
        >
          Contact Me
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