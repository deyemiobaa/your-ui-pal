import NavBarMobile from "../helpers/nav-bar-mobile"
import NavBarDesktop from "../helpers/nav-bar-desktop"

export default function Header() {

  return (
    <header>
      <NavBarDesktop />
      <NavBarMobile />
    </header>
  )
}