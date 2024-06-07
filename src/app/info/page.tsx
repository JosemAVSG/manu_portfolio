import InfoComponent from "@/components/InfoComponent";
import styles from '@/styles/infopage.module.scss'

const Info= () => {
  return (
    <div className={styles.infopage}>
      <div className="row-span-1 "></div>
        <InfoComponent  ></InfoComponent>
    </div>
  )
}

export default Info;
