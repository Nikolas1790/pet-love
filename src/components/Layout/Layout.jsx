import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import Loader from 'components/Loader/Loader';
import Header from 'components/Header/Header';

export default function Layout() {
  // const location = useLocation();
  // const hideHeaderPaths = ['/register', '/login'];
  return (
    <div>
      {/* {hideHeaderPaths.includes(location.pathname) ? null : <Header />} */}
      <Header />
      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />  
        </Suspense>
      </main> 
    </div>
  );
};