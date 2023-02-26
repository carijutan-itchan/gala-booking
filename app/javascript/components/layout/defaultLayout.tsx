import React, { FC } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import SearchSection from '../../shared/sections/search/searchSection';

const DefaultLayout: FC = () => {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Gala | Booking</title>
        </Helmet>
      </HelmetProvider>
      <div className='relative overflow-hidden '>
        <div className='container relative'>
          <SearchSection />
        </div>
      </div>
    </>
  );
}

export default DefaultLayout;