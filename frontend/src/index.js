import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import HomePage from './landing_page/home/HomePage';
import AboutPage from './landing_page/about/AboutPage';
import PricingPage from './landing_page/pricing/PricingPage';
import ProductPage from './landing_page/products/ProductsPage';
import SignupPage from './landing_page/signup/Signup';
import SupportPage from './landing_page/support/SupportPage';


import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Footer from './landing_page/Footer';
import Navbar from './landing_page/Navbar'
import { NotFound } from './landing_page/NotFound';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter> 
          <Navbar/>
  <Routes>
    <Route path='/' element={<HomePage/>} />
    <Route path='/about' element={<AboutPage/>} />
    <Route path='/pricing' element={<PricingPage/>} />
    <Route path='/products' element={<ProductPage/>} />
    <Route path='/signup' element={<SignupPage/>} />
    <Route path='/support' element={<SupportPage/>} />
    <Route path='*' element={<NotFound/>} />
  </Routes>
  <Footer/>
  </BrowserRouter>
);

