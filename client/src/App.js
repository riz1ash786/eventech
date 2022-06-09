import React from 'react';

import { Navbar } from './components';
import { Header, AboutUs, Intro } from './container';

import './App.css';

const App = () => (
  <div>
    <Navbar />
    <Header />
    <AboutUs />
    <Intro />
  </div>
);

export default App;
