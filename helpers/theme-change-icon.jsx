import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { MdOutlineLightMode } from 'react-icons/md';
import { BsMoonStars } from 'react-icons/bs';

export default function ThemeChangeIcon() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])
  
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  }

  if (!mounted) {
    return <MdOutlineLightMode className='text-2xl' />
  }
  
  return (
    <div className="theme-change" onClick={toggleTheme}>
      {theme === 'light' ? <MdOutlineLightMode className='text-2xl' /> : <BsMoonStars className='text-2xl' />}
    </div>
  );
}