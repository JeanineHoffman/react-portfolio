import React from 'react';
import './App.css';
import HomePage from './HomePage';
import Header from './components/Header';
import Footer from './components/Footer';
import Navigation from './components/Navigation';


function App() {
  return (
    <div className="App">
      <Header />
      <Navigation />
      <HomePage />
      <Footer />
    </div>
  );
}

export default App;
