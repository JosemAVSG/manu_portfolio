"use client";
import Link from "next/link";
import style from "@/styles/navbar.module.scss";
import { useAppSelector } from "@/hooks/reduxHook";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Projects from "./Projects";
const Navbar = () => {
  const background = useAppSelector((state) => state.globalSlice.background);
  const [openDropdown, setOpenDropdown] = useState(false);
  const path = usePathname();


  const isPortfolioPage = path.startsWith("/portfolio");
  return (
    <>
      <header className="sticky top-0 z-20">    
        <nav className={`${style.navbar} ${isPortfolioPage ? "bg-white" : "bg-transparent"}`}>
          {path === "/info" || isPortfolioPage ? (
            <>
              <Link className={`font-sequel `} href="/">
                Close
              </Link>
              <button
                className={`font-sequel ${style.portfolio}`}
                onClick={() => setOpenDropdown(!openDropdown)}
              >
                PORTFOLIO
              </button>
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
           ${openDropdown ? 'block' : 'hidden'} z-20 `}>
            <div className="flex justify-start p-4  bg-white sticky top-0">
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
