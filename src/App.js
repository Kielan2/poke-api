import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Cards  from './components/Cards/Cards';

function App() {
  return (
    <div className="App">
      <Header />
    <Cards />
      <Footer />
    </div>
  );
}

export default App;

