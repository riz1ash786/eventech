import React from 'react';

import { Navbar } from './components';
import { Header, AboutUs, Intro , Slides} from './container';

import './App.css';

const App = () => (
  <div>
    <Navbar />
    <Header />
    <AboutUs />
    <Intro />
    <Slides />
  </div>
);

export default App;
