import PortfolioComponent from '@/components/PortfolioComponent';
import styles from '@/styles/portfolio.module.scss';

const Portfolio = () => {
  return (
    <div className={styles.portfolio}>
      <div className='row-span-1'></div>
     <PortfolioComponent proyecto="proyecto" techs={['html', 'css','vue','svelte', 'vanilla javascript', 'react', 'nextjs']} imagen={''}></PortfolioComponent>
    </div>
  )
}

export default Portfolio;