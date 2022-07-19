import { useState } from "react";

export default function NavBar() {
  const [toggle, setToggle] = useState(true)

  const handleToggle = () => {
    setToggle(!toggle)
  }
  return (
    <div className="flex flex-col items-end justify-between w-8 h-6"
      onClick={handleToggle}
    >
      <span
        className="w-full h-1 transition-transform duration-500 origin-[0%_0%] bg-black rounded-xl"
        style={toggle ? { transform: "rotate(45deg)" } : {}}></span>
      <span
        className="w-3/4 h-1 transition-opacity duration-200 bg-black rounded-xl"
        style={toggle ? { opacity: 0 } : {}}></span>
      <span
        className="w-full h-1 transition-transform duration-500 origin-[0%_150%] bg-black rounded-xl"
        style={toggle ? { transform: "rotate(-45deg)" } : {}}></span>
    </div>
  );
}
