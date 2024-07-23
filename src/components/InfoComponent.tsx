import styles from "@/styles/infopage.module.scss";
const InfoComponent = () => {
  return (
    <div className={styles.infocomponent}>
      <div className="border-t-2 border-b-1 border-black row-span-1 flex justify-center items-center ">

        <p className=" font-sequel m-4 sm:text-lg md:text-xl  ">
          Hello and welcome to my website. My name is Manuel Blanco, and I am a
          programmer based in Bogotá, Colombia.<br/> With a strong interest in
          technology and culture, I work on a variety of self-commissioned
          projects as well as for various clients to help them transform their
          ideas into visual worlds. <br/><br/>If you would like to work or get in touch
          with me, please don{"'"}t hesitate to send me an email :{")"} 
        </p>
     
      </div>
      <div className=" font-sequel border-t-2 border-black row-span-1 flex justify-start items-center ">
        <h2 className="m-4">manuelblanco@gmail.com</h2>
      </div>
      <div className=" font-sequel border-t-2  border-gray-500 row-span-1flex justify-start">
        <ul className="flex my-4">

        <li>
          <a><span className="m-4">Facebook</span></a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/manabl/" target="_blank"><span className="m-4">Linkedin</span></a>
        </li>
        <li>
          <a href="https://github.com/mblancodev" target="_blank"><span className="m-4">Github</span></a>
        </li>

        </ul>
      </div>
    </div>
  );
};

export default InfoComponent;
