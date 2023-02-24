import React, { FC } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../../shared/header/header';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const DefaultLayout: FC = () => {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Gala | Booking</title>
        </Helmet>
        <div className='bg-white text-base text-neutral-900 dark:text-neutral-200'>
          <Header />
        </div>
      </HelmetProvider>
    </>
  );
}

export default DefaultLayout;