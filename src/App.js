import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './components/HomePage';
import About from './components/About';
import Contact from './components/Contact';
import ErrorPage from './components/ErrorPage';
import Layout from './components/Layout';

function App() {
  return (
    <>
   <Routes>
     <Route path="/" element={<Layout />}>
     <Route index element={<HomePage />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="*" element={<ErrorPage />} />
     </Route>
   </Routes>
    </>
  );
}

export default App;
