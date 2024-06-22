"use client"
import PortfolioComponent from '@/components/PortfolioComponent';
import styles from '@/styles/portfolio.module.scss';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useAppSelector } from '@/hooks/reduxHook';

interface Project {
  name: string;           // Asegúrate de que 'name' coincida con el nombre correcto en tu objeto de proyecto
  stack: string[];        // Asegúrate de que 'stack' coincida con el nombre correcto en tu objeto de proyecto
  images: string[];       // Asegúrate de que 'images' coincida con el nombre correcto en tu objeto de proyecto
  descriptions: string[];
}

const Portfolio = () => {
  
  const getid = usePathname().split("/").pop();
  const Proyecto: Project[] = useAppSelector((state) => state.color.projects);
  const isloading = useAppSelector(state => state.color.loading);
  const [project, setProject] = useState<Project | null>(null);

  useEffect(() => {
    if (!isloading) {
      const project = Proyecto[Number(getid)];
      if (project) {
        setProject(project);
      } else {
        setProject(null);
      }
    }
  },[Proyecto, getid, isloading]);
  console.log(project);
  
  return (
    <div className={styles.portfolio}>
      <div className='row-span-1'></div>
      {isloading? <p>Cargando...</p> :
     <PortfolioComponent proyecto={ project?.name} techs={project?.stack} imagen={ project?.images[0] } description={ project?.descriptions[0] }></PortfolioComponent>
      
      }
    </div>
  )
}

export default Portfolio;