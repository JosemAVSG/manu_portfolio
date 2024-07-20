
import PortfolioComponent from '@/components/PortfolioComponent';
import styles from '@/styles/portfolio.module.scss';


interface Project {
  name: string;           // Asegúrate de que 'name' coincida con el nombre correcto en tu objeto de proyecto
  stack: string[];        // Asegúrate de que 'stack' coincida con el nombre correcto en tu objeto de proyecto
  images: string[];       // Asegúrate de que 'images' coincida con el nombre correcto en tu objeto de proyecto
  descriptions: string[];
}

const getProducts =  async (id: number ) => {
  
  const response = await fetch('http://localhost:3000/products.json');
  const data = await response.json();
  return data.projects[id];
}

const Portfolio = async ({params}: any) => {
  

  const getid = params.id;
  const project: Project = await getProducts(getid);
  return (
    <div className={styles.portfolio}>
      <div className='row-span-1'></div>
    
     <PortfolioComponent proyecto={ project?.name} techs={project?.stack} imagen={ project?.images } description={ project?.descriptions[0] }></PortfolioComponent>
      
    </div>
  )
}

export default Portfolio;