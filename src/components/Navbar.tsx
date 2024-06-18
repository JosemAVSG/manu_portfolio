"use client";
import Link from "next/link";
import style from "@/styles/navbar.module.scss";
import { useAppSelector } from "@/hooks/reduxHook";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import Projects from "./Projects";
const Navbar = () => {
  const background = useAppSelector((state) => state.color.background);
  const [openDropdown, setOpenDropdown] = useState(false);
  const path = usePathname();

  return (
    <>
      <header>
        <nav className={`${style.navbar}`}>
          {path === "/info" || path === "/portfolio" ? (
            <>
              <Link className={`font-sequel `} href="/">
                Close
              </Link>
              <Link
                className={`font-sequel ${style.portfolio} `}
                href="/portfolio"
              >
                PORTFOLIO
              </Link>
            </>
          ) : (
            <>
              <Link
                className={`font-sequel ${style.info} ${
                  background === "black" || background === "gray"
                    ? "text-white"
                    : "text-black"
                }  `}
                href="/info"
              >
                INFO
              </Link>
                {/* <ButtonPortfolio></ButtonPortfolio> */}
                <button
                className={`font-sequel ${style.portfolio} ${
                  background === "black" || background === "gray"
                    ? "text-white"
                    : "text-black"
                }  `}
                onClick={() => setOpenDropdown(!openDropdown)}
              >
                PORTFOLIO
              </button>
            </>
          )}
        </nav>
          <div className={`${style.menuinside}
           ${openDropdown ? 'block' : 'hidden'} `}>
            <div className="flex justify-start p-4  bg-white">
              <button className="font-sequel text-2xl" onClick={() => setOpenDropdown(!openDropdown)}>
              Close
              </button>
            </div>
            <Projects></Projects>
          </div>

      </header>
    </>
  );
};

export default Navbar;
