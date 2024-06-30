import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Fetch  from './components/Fetch/Fetch';

function App() {
  return (
    <div className="App">
      <Header />
    <Fetch />
      <Footer />
    </div>
  );
}

export default App;

