import { Outlet, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

export default function Layout() {
  const { pathname } = useLocation();

  // 페이지 이동 시 스크롤 최상단으로
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="relative w-full min-h-screen bg-bg-base overflow-x-hidden">
      <Navbar />
      <main className="relative z-10 w-full pt-[72px]">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
