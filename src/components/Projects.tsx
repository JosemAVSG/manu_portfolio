import styles from "@/styles/projects.module.scss";
const Projects = () => {
  return (
    <>
      <div className={styles.projects}>
        <div>
          <h3>Projects</h3>
        </div>
        <ul className={styles.list}>
          <li>
            Project 1 techs
            <ul className={styles.techlist}>
              <li>html</li>
              <li>css</li>
              <li>javascript</li>
              <li>react</li>
              <li>nextjs</li>
            </ul>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Projects;
