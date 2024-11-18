import React from 'react';
import Header from './components/Header';
import Banner from './components/Banner';
import Products from './components/Products';
import Sponsors from './components/Sponsors';
import Footer from './components/Footer';
import './App.css';
import About from './components/About';
import Discount from './components/discount';
import LargeProducts from './components/LargeProducts';

function App() {
  return (
    <div className="App">
      <Discount></Discount>
      <Header />
      <div className="discount-placeholder" />
      <Banner />
      <Products />
      <Sponsors />
      <About></About>
      <LargeProducts/>
      <Footer />
    </div>
  );
}
export default App;
