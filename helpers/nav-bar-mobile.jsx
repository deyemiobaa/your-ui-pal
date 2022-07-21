import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../public/vercel.svg";

export default function NavBarMobile() {
  const [toggle, setToggle] = useState(true)

  const handleToggle = () => {
    setToggle(!toggle)
  }
  return (
    <div className="flex items-center justify-between px-6 border-b border-solid h-14 border-[#3C3C3C]/[.12] dark:border-[#545454]/[.48] dark:text-white/[.87] text-[#213547] w-full md:hidden font-bold">
      <Link href="/">
        <Image className="daily-ui-logo" src={logo} alt="UI Design Daily Logo" height={30} />
      </Link>
      <nav
        className="flex flex-col items-end justify-between w-5 h-4"
        onClick={handleToggle}>
        <span
          className="w-full h-0.5 transition-transform duration-500 origin-[0%_0%] bg-[#213547] rounded-xl dark:bg-[#E1E1E1]"
          style={toggle ? { transform: "rotate(45deg)" } : {}}></span>
        <span
          className="w-3/4 h-0.5 transition-opacity duration-200 bg-[#213547] rounded-xl dark:bg-[#E1E1E1]"
          style={toggle ? { opacity: 0 } : {}}></span>
        <span
          className="w-full h-0.5 transition-transform duration-500 origin-[0%_150%] bg-[#213547] rounded-xl dark:bg-[#E1E1E1]"
          style={toggle ? { transform: "rotate(-45deg)" } : {}}></span>
      </nav>
    </div>
  );
}
