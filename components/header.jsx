import Image from "next/image"
import Link from "next/link"
import logo from '../public/vercel.svg'
import ThemeChangeIcon from "../helpers/theme-change-icon"
import NavBar from "../helpers/nav-bar-mobile"

export default function Header() {
  
  return (
    <header className="flex items-center justify-between h-16 p-5">
      <Link href="/">
        <Image className="daily-ui-logo" src={logo} alt="UI Design Daily Logo" height={30}/>
      </Link>

      <nav className="flex items-center gap-10">
        <ThemeChangeIcon />
        <NavBar />
      </nav>
    </header>
  )
}