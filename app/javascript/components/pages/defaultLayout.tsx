import React, { FC } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import SearchSection from '../search/searchSection';
import PropertyListSection from '../propertyList/propertyListSection';

const DefaultLayout: FC = () => {
  return (
    <>
      {/* @ts-ignore */}
      <HelmetProvider>
        {/* @ts-ignore */}
        <Helmet>
          <title>Gala | Booking</title>
        </Helmet>
      </HelmetProvider>
      <div className='relative overflow-hidden '>
        <div className='container relative'>
          <SearchSection />
          <PropertyListSection />
        </div>
      </div>
    </>
  );
}

export default DefaultLayout;