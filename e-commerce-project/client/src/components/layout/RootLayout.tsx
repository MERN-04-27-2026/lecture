import { Outlet } from 'react-router-dom';

import { Footer } from './Footer';
import { Navbar } from '../../features/navbar/Navbar';

const RootLayout = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
      }}
    >
      <Navbar />
      <main style={{ flex: 1 }}>
        {/* connects this component to all the nested route */}
        {/* the Outlet component is the nested route */}
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default RootLayout;
