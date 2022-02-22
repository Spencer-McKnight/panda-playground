import React from 'react';

import Content from './content';
import Header from './header';
import Hero from './hero';

import 'bootstrap/dist/css/bootstrap.css';

const App = () => (
  <div className="container">
    <Header />
    <Hero />
    <Content />
  </div>
);

export default App;
