import Link from "next/link"
export default function NavBarDesktop() {
  return (
    <nav className="main-navigation">
      <Link id="main-nav-designs-btn" className="nav-menu-item active" href="/">Designs</Link>
      <Link id="main-nav-about-btn" className="nav-menu-item" href="/about">About</Link>
      <Link id="main-nav-license-btn" className="nav-menu-item" href="/license">License</Link>
      <Link id="main-nav-contact-btn" className="nav-menu-item" href="/contact">Contact</Link>
    </nav>
  )
}