import Link from "next/link"
import Image from "next/image"
import logo from "../public/vercel.svg"
import ThemeChangeIcon from "./theme-change-icon"

export default function NavBarDesktop() {
  return (
    <div className="md:flex items-center justify-between px-6 border-b border-solid h-14 border-[#3C3C3C]/[.12] dark:border-[#545454]/[.48] w-full dark:text-white/[.87] text-[#213547] font-bold hidden">
      <Link href="/">
        <Image className="daily-ui-logo" src={logo} alt="UI Design Daily Logo" height={30} />
      </Link>

      <nav className="flex gap-16">
        <Link className="nav-menu-item active" href="/">Components</Link>
        <Link className="nav-menu-item" href="/about">About</Link>
        <Link className="nav-menu-item" href="/license">License</Link>
        <Link className="nav-menu-item" href="/contact">Contact</Link>
        <ThemeChangeIcon />
      </nav>
    </div>
  )
}