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
      <div className="row-span-1 border-t-2 border-b-2 border-black sticky top-0 bg-white  ">
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
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam impedit quaerat totam repellendus dolorem iure consequatur id odio vitae eligendi, esse sapiente dicta eos, aut sint. Molestias, nam? At, animi.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam ipsum, quos deleniti quae assumenda beatae cum et officia, illo delectus exercitationem voluptates, nesciunt ipsam excepturi aliquam expedita eos magnam fugiat?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut rem sunt voluptas, sapiente ad laboriosam dolores unde nemo magni? Ipsum molestiae ducimus aliquam voluptate reprehenderit dolore vel dolorum modi officiis.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo maxime explicabo quaerat vel accusamus quibusdam nobis voluptatum pariatur! Eligendi omnis eum incidunt sequi fuga similique, perspiciatis nihil veniam distinctio molestiae.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id voluptas veniam incidunt dolorum dolore earum, possimus quos necessitatibus nostrum natus, suscipit eius molestiae nobis ea, eum maxime quasi asperiores vero.
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid corporis nihil ex et dolorem, laudantium harum sunt? Dolore molestiae voluptate voluptatum atque cum culpa necessitatibus est iste? Magnam, magni mollitia!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint laboriosam, cum minus harum odit sequi laudantium reprehenderit repudiandae voluptates eveniet error reiciendis natus magnam consequatur nobis quaerat aperiam saepe! Quia.

          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores animi, nihil reprehenderit, dicta optio totam tempore nemo ut vitae dignissimos qui maxime reiciendis quas ratione molestiae quo. Nulla, eveniet excepturi! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis esse fuga cupiditate veritatis et assumenda velit nesciunt, cumque, quam distinctio, neque magnam unde alias atque sunt minima soluta incidunt fugit!
          </p>
        </div>
      </div>

      <div className="row-span-1">
      <div className="row-span-1 flex justify-center items-center">
      footer 
      </div>
      </div>
    </div>
  );
};

export default PortfolioComponent;
