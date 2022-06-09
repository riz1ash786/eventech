import React from 'react';

import { Navbar } from './components';
import { Header, AboutUs } from './container';

import './App.css';

const App = () => (
  <div>
    <Navbar />
    <Header />
    <AboutUs />
  </div>
);

export default App;
