import React from 'react';

import Content from './content';
import Header from './header';
import Hero from './hero';

import 'bootstrap/dist/css/bootstrap.css';

const App: React.FC = () => (
  <div className="container">
    <Header />
    <Hero altText='Giant Panda 🐼' />
    <Content />
  </div>
);

export default App;
