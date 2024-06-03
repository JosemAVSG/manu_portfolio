import Link from "next/link"
import style from '@/styles/navbar.module.scss'

const Navbar = () => {
  return (
    <>
    <header>
        <nav className={style.navbar}>
            <Link className={style.info} href="/">INFO</Link>
            <Link className={style.portfolio} href="/about">PORTOFOLIO</Link>
        </nav>

    </header>
    
    </>
  )
}

export default Navbar
