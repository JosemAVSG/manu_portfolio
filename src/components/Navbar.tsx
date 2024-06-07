"use client";
import Link from "next/link";
import style from "@/styles/navbar.module.scss";
import { useAppSelector } from "@/hooks/reduxHook";
import { usePathname } from "next/navigation";
const Navbar = () => {
  const background = useAppSelector((state) => state.color.background);
  const path = usePathname();

  return (
    <>
      <header>
        <nav className={style.navbar}>
          {path === "/info" ? (
          <Link
          className={`font-sequel ${style.home} ${
            background === "black" || background === "gray"
              ? "text-white"
              : "text-black"
          }  `}
          href="/"
        >
          Close
        </Link>
          ) : (
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
            
          )}

          <Link
            className={`font-sequel ${style.portfolio} ${
              background === "black" || background === "gray"
                ? "text-white"
                : "text-black"
            }  `}
            href="/portfolio"
          >
            PORTFOLIO
          </Link>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
