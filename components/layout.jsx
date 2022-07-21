import Header from './header';
import Footer from './footer';

export default function Layout({ children }) {
  return (
    <div className="layout text-[#3C3C3C]/[.7] dark:text-[#EBEBEB]/[.6] dark:bg-[#1A1A1A] bg-white relative">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}