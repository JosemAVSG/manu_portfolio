import styles from "@/styles/portfolio.module.scss";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
interface Props {
  proyecto: string;
  techs: [];
  imagen: string;
}
const PortfolioComponent = ({ proyecto, techs, imagen }: Props) => {
  return (
    <div className={styles.portofolioComponent}>
      <div className="row-span-1 border-t-2 border-b-2 border-black fixed">
        <div className="flex items-center m-4 py-2 gap-2">
          <h2>Project</h2>
          <FontAwesomeIcon icon={faArrowRight} width={20} />{" "}
          {proyecto ? proyecto : "cualquier proyecto"}{" "}
        </div>
      </div>

      <div className={`${styles.tech}  `}>
        <div className="col-span-1 border-r-2 border-black   ">
          <div className="flex justify-center items-center m-4 ">
            {techs ? techs.map((tech) => <p key={tech} className="rounded-2xl " >{tech}</p>) : "No hay tecnologías"}
          </div>
        </div>
        <div className="col-span-1 m-4 ">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima
            illo neque sint obcaecati repudiandae nam et, esse qui, eaque, sunt
            totam sed atque iste quibusdam aperiam architecto ea. Quibusdam,
            commodi.
          </p>
        </div>
      </div>

      <div className={` ${styles.description_img} `}>
        <div className="col-span-1 flex py-40 px-20 justify-center items-center ">
          <p>Designed and develop mobile oriented designs for a more concise and easy-to-use UI, allowing the user to have a better experience</p>
        </div>
        <div className="col-span-1 flex p-20 justify-center items-center ">
          {imagen ? (
            <div className="flex justify-center items-center rounded-lg">
              <Image src={imagen} alt="image" width={300} height={300} />
            </div>
          ) : (
            <span
              className={`${styles.loader} flex justify-center items-center`}
            ></span>
          )}
        </div>
      </div>

      <div className="row-span-1 ">
        <div className="row-span-1 flex justify-center items-center">
          <h3>imagen</h3>
        </div>
      </div>

      <div className="row-span-1"></div>
    </div>
  );
};

export default PortfolioComponent;
