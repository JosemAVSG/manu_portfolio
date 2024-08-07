import styles from "@/styles/portfolio.module.scss";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
interface Props {
  proyecto: string | undefined;
  techs: string[] | undefined;
  imagen: string[] | undefined;
  description: string []| undefined;
}
const PortfolioComponent = ({ proyecto, techs, imagen, description }: Props) => {
  return (
    <div className={styles.portofolioComponent}>
      <div className="row-span-1 border-t-2 border-b-2 border-black sticky top-18 bg-white z-10">
        <div className="flex items-center m-4 py-2 gap-2">
          <h2>Project</h2>
          <FontAwesomeIcon icon={faArrowRight} width={20} />
          {proyecto ? proyecto : "cualquier proyecto"}
        </div>
      </div>

      <div className={`${styles.tech} `}>
        <div className="col-span-1 md:border-r-2 xs:border-b-2 p-4  border-black h-auto ">
          <ul className="flex gap-1  flex-wrap  h-full items-center">
            {techs ? techs.map((tech, index) => <li key={index} className="flex font-sequel text-xs items-center rounded-2xl border border-gray-900 px-2 py-1" >{tech}</li>) : "No hay tecnologías"}
          </ul>
        </div>
        <div className="col-span-1 m-4">
          <p className=" flex h-full items-center text-xl font-sequel ">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima
            illo neque sint obcaecati repudiandae nam et, esse qui, eaque, sunt
            totam sed atque iste quibusdam aperiam architecto ea. Quibusdam,
            commodi.
          </p>
        </div>
      </div>

      <div className={`${styles.description_img}`}>
        <div className="col-span-1 flex py-40 px-20 justify-center items-center  md:border-r-2 border-black ">
          <p>{description}</p>
        </div>
        <div className="col-span-1 flex p-20 justify-center items-center ">
          {imagen ? (
            <div className="flex justify-center items-center rounded-lg">
              <Image src={imagen[0]} alt="image" width={300} height={300} />
            </div>
          ) : (
            <span
              className={`${styles.loader} flex justify-center items-center`}
            ></span>
          )}
        </div>
      </div>

      <div className=" flex p-10 justify-center items-center border-b-2 border-black">
          {description ? <p>{description[1]}</p> : "No hay descripción"}
      </div>
      
      <div className={`${styles.centerimg}`}>
        <div className=" flex p-10 justify-center items-center  border-black">
          {imagen ? (
            <div className="w-full h-auto">
              <Image src={imagen[1]} alt="image" width={600} height={600} />
            </div>
          ) : (
            <span
              
            ></span>
          )}
        </div>
      </div>

      <div className={`${styles.footer}`}>
      <div className="flex font-sequel  mx-4 items-center justify-between ">
          <p>
            Manuel Blanco © 2022
          </p>
      </div>
      </div>
    </div>
  );
};

export default PortfolioComponent;
