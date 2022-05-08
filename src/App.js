import React from 'react';

import { Footer, New, Skills, About, Header } from './containers';
import { Brand, Navbar } from './components';

import './App.css';

const App = () => (
  <div className="App">
    <div className="gradient__bg">
      <Navbar />
      <Header />
    </div>
    <Brand />
    <About />
    <Skills />
    <New />
    <Footer />
  </div>
);

export default App;