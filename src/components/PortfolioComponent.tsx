import styles from '@/styles/portfolio.module.scss'
import Image from 'next/image'
interface Props {
  proyecto: string,
  techs: string,
  imagen: string,
}
const PortfolioComponent = ({proyecto, techs, imagen}: Props) => {
  return (
    <div className={styles.portofolioComponent}>
      <div className='row-span-1' >
        Project {proyecto? proyecto : "cualquier proyecto"} </div>
      <div className={ `${styles.tech}` } >
        <div className='col-span-1 border-r-2 border-black'>
          <p>Techs</p>
        </div>

        <div className='col-span-1 '>
        <p>Portfolio</p>
        </div>
      </div>
      <div>
          { imagen ? (
            <Image src={imagen} alt="image" width={300} height={300} />
          ):(
            <div className='loader'></div>
          )}
      </div>
    </div>
  )
}

export default PortfolioComponent;
