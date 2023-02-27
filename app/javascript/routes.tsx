import React from 'react';
import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import DefaultLayout from './components/pages/defaultLayout';
import PropertyDetailsLayout from './components/pages/propertyDetailsLayout';

export const AppRoutes: FC = () => (
  <Routes>
    <Route path='/' element={<DefaultLayout />} />
    <Route element={<PropertyDetailsLayout />} path='/property-details' />
  </Routes>
);