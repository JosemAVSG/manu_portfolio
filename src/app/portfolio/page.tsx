import PortfolioComponent from '@/components/PortfolioComponent';
import styles from '@/styles/portfolio.module.scss';

const Portfolio = () => {
  return (
    <div className={styles.portfolio}>
      <div className='row-span-1'></div>
     <PortfolioComponent proyecto="proyecto" techs={''} imagen={''}></PortfolioComponent>
    </div>
  )
}

export default Portfolio;