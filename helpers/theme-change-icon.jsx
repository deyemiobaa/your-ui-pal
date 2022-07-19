import { useState } from 'react';
import {MdOutlineLightMode} from 'react-icons/md';
import {BsMoonStarsFill} from 'react-icons/bs';

export default function ThemeChangeIcon() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  }

  return (
    <div className="theme-change" onClick={toggleTheme}>
      {theme === 'light' ? <MdOutlineLightMode className='text-3xl' /> : <BsMoonStarsFill className='text-3xl' />}
    </div>
  );
}