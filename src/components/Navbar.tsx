"use client";
import Link from "next/link";
import style from "@/styles/navbar.module.scss";
import { useAppSelector } from "@/hooks/reduxHook";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
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

                <button
                className={`font-sequel text-2xl ${style.portfolio} ${
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
          <div className={`${style.dropdown} ${openDropdown ? style.open : "hidden"}`}>
            <h2>Project</h2>
          </div>

      </header>
    </>
  );
};

export default Navbar;
