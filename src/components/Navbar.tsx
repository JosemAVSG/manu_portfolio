'use client'
import Link from "next/link"
import style from '@/styles/navbar.module.scss'
import { useAppSelector } from '@/hooks/reduxHook'
const Navbar = () => {
    const background = useAppSelector((state) => state.color.background);
  return (
    <>
    <header>
        <nav className={style.navbar}>
            <Link className={`${style.info} ${background === 'black' || background === 'gray' ? "text-white" : "text-black"}  `} href="/info">INFO</Link>
            <Link className={`${style.portfolio} ${background === 'black' || background === 'gray' ? "text-white" : "text-black"}  `} href="/portfolio">PORTFOLIO</Link>
        </nav>

    </header>
    
    </>
  )
}

export default Navbar
