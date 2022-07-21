import { BsGithub } from 'react-icons/bs';

export default function Footer() {
  return (
    <footer className='fixed bottom-0 flex text-[#213547] dark:text-white/[.87] justify-center gap-10 inset-x-0 h-11 items-center  border-[#3C3C3C]/[.12] dark:border-[#545454]/[.48] border-t'>
      <p> Released under the <a href="https://opensource.org/licenses/MIT" target="_blank" rel="noopener noreferrer" className='font-bold'>MIT License</a></p>
      <p>Copyright &copy; 2022 - {Date.now.year} UI Pal</p>
      <a href="https://github.com/deyemiobaa/your-ui-pal" target="_blank" rel="noopener noreferrer"><BsGithub className='text-2xl' /></a>
    </footer>
  )
}