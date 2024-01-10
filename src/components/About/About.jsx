import styles from "./About.module.css";

import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor Icon" />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
                With 1+ years of experience as a React frontend developer, I&apos;ve
                successfully delivered projects with measurable impact. I
                optimized performance, reducing load times by 27%. Integrated
                cutting-edge technologies, enhancing user engagement by 15%. My
                collaborative approach ensured timely delivery, completing
                projects 10% ahead of schedule.
              </p>
            </div>
          </li>
          {/* <li className={styles.aboutItem}>
            <img src={getImageUrl('about/serverIcon.png')} alt="server icon" />
            <div className={styles.aboutItemText}>
                <h3>Version Control</h3>
                <p>I have experience in version control system like git.</p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl('about/uiIcon.png')} alt="UI icon" />
            <div className={styles.aboutItemText}>
                <h3>Bug fixing</h3>
                <p>I have good score in fixing bug all the time.</p>
            </div>
          </li> */}
        </ul>
      </div>
    </section>
  );
};
