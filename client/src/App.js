import React from 'react';

import { Navbar } from './components';
import { Header, AboutUs, Intro , Slides,  Footer} from './container';

import './App.css';

const App = () => (
  <div>
    <Navbar />
    <Header />
    <AboutUs />
    <Intro />
    <Slides />
    <Footer />
  </div>
);

export default App;
