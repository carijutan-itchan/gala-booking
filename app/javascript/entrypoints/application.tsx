import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from '../components/App';
import Header from '../shared/header/header';

const container = document.getElementById('root') as HTMLElement;

ReactDOM.render(
  <BrowserRouter>
    <div className='bg-white text-base text-neutral-900 dark:text-neutral-200'>
      <Header />
      <App />
    </div>
  </BrowserRouter>,
  container
)