import React, { FC, StrictMode } from 'react';
import Header from '../shared/header/header';
import { AppRoutes } from '../routes';
import '../styles/index.scss'

const App: FC = () => (
  <StrictMode>
    <AppRoutes />
  </StrictMode>
)

export default App;