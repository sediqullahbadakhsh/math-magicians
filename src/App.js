import React, { PureComponent } from 'react';
import './assets/App.css';
import { Routes, Route } from 'react-router-dom';
import Calculator from './components/Calculator';
import Header from './components/Header';
import Quote from './components/Quote';
import Home from './components/Home';
import NoPage from './components/nopage';

class App extends PureComponent {
  render() {
    return (
      <>
        <Header />
        <Routes className="content">
          <Route path="/" element={<Home className="content" />} />
          <Route path="calculator" element={<Calculator />} />
          <Route path="quote" element={<Quote />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </>
    );
  }
}

export default App;
