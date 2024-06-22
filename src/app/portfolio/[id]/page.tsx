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
  const Proyecto: Project[] = useAppSelector(state => state.color.projects);
  const [project , setProject] = useState({});
  
  // useEffect(() => {
  //   if(!Proyecto) return;
  //  setProject(Proyecto[Number(getid)]);
  // }, [getid,Proyecto]);
  
  console.log(Proyecto);
  
  return (
    <div className={styles.portfolio}>
      <div className='row-span-1'></div>
     <PortfolioComponent proyecto="proyecto" techs={['html', 'css','vue','svelte', 'vanilla javascript', 'react', 'nextjs']} imagen={''}></PortfolioComponent>
    </div>
  )
}

export default Portfolio;