import styles from "@/styles/projects.module.scss";
import { faTags } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



const Projects = () => {
  return (
    <>
      <div className={styles.projects}>
        <ul className={styles.list}>
          
          <li>
            <div className={`font-sequel ${ styles.title} `}> 
           <h2>Project</h2>  
            <FontAwesomeIcon  icon={faTags} width={10} />
            </div>
            <ul className={` font-sequel ${styles.techlist }`}>
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
