'use client'
import { useAppDispatch, useAppSelector } from "@/hooks/reduxHook";
import styles from "@/styles/projects.module.scss";
import { faTags } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect , useState} from "react";
import { getProjectsAction } from "@/redux/slice/colorSlice";

interface Project {
  name: string;           // Asegúrate de que 'name' coincida con el nombre correcto en tu objeto de proyecto
  stack: string[];        // Asegúrate de que 'stack' coincida con el nombre correcto en tu objeto de proyecto
  images: string[];       // Asegúrate de que 'images' coincida con el nombre correcto en tu objeto de proyecto
  descriptions: string[];
}

const  Projects =  () => {
  const dispatch = useAppDispatch();
 const projects: Project[] = useAppSelector(state => state.color.projects) ;
 const isloading = useAppSelector(state => state.color.loading);
 useEffect(() => {
   dispatch(getProjectsAction());
  },[dispatch])
  console.log(isloading, projects);
  
  return (
    <>
      <div className={styles.projects}>
        <ul className={styles.list}>
          {  isloading  && projects.map((project, index) => (
            <li key={index}>
              <div className={`font-sequel ${ styles.title} `}> 
           <h2>{project.name}</h2>  
            <FontAwesomeIcon  icon={faTags} width={10} />
            </div>
              <ul className={` font-sequel ${styles.techlist }`}>
                {project.stack.map((tech, index) => (
                  <li key={index}>{tech}</li>
                ))}
              </ul>
            </li>
          ))}
      
        </ul>
      </div>
    </>
  );
};

export default Projects;
