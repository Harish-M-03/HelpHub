import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Listing from '../components/Listing';
import AppDownload from '../components/AppDownload';
import Footer from '../components/Footer';
const Home = () => {
  const [searchCity, setSearchCity] = useState('');

  return (
    <div>
      <Navbar />
      <Hero setSearchCity={setSearchCity} />
      <Listing searchCity={searchCity} />
      <AppDownload/>
      <Footer/>
    </div>
  );
};

export default Home;