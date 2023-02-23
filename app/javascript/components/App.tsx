import React from 'react';
import Header from '../shared/header/header';
import '../styles/index.scss'

const App: React.FC = (): JSX.Element => {
  return <div>
    <Header />
    <h1 className='text-3xl font-bold underline'> Jhon miss na kita Jhon  - JEPOY </h1>
  </div>;
};

export default App;